/*
 * (C) Copyright 2014 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package org.kurento.tutorial.groupcall;

import java.io.IOException;

import org.kurento.client.IceCandidate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

/**
 * 
 * @author Ivan Gracia (izanmail@gmail.com)
 * @since 4.3.1
 */
/*
    text WebSocket request를 처리하기 위해 TextWebSocketHandler를 상속받은 상태
 */
public class CallHandler extends TextWebSocketHandler {

  private static final Logger log = LoggerFactory.getLogger(CallHandler.class);

  private static final Gson gson = new GsonBuilder().create();

  @Autowired
  private RoomManager roomManager;

  @Autowired
  private UserRegistry registry;

  @Override
  // 여기서 session이 client단과 연결되어 있는 것 -> 즉, 뭔가를 보내려면 여기다가 보내면 된다.
  public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
    // 사실 이 메소드가 이 클래스에서 가장 중요한 메소드

    /*
        메소드가 하는 일
        요청에 대한 작업을 구현하고, WebSocket을 통해 응답을 반환함
        -> 시그널링 서버의 프로토콜의 서버부분을 구현

        이 프로토콜로 서버에 5가지 종류의 메세지가 날라옴
        1. joinRoom
        2. receiveVideoFrom
        3. leaveRoom
        4. onIceCandidate
        5. afterConncetionClosed
        추가 ) sendChat, sendYTUrl
        -> switch case로 처리
     */
    final JsonObject jsonMessage = gson.fromJson(message.getPayload(), JsonObject.class);

    final UserSession user = registry.getBySession(session);

    if (user != null) {
      log.debug("Incoming message from user '{}': {}", user.getName(), jsonMessage);
    } else {
      log.debug("Incoming message from new user: {}", jsonMessage);
    }

    // Client에서 Server로 보낸 신호
    switch (jsonMessage.get("id").getAsString()) {
      case "joinRoom":
        joinRoom(jsonMessage, session);
        break;
      case "receiveVideoFrom":
        final String senderName = jsonMessage.get("sender").getAsString();
        final UserSession sender = registry.getByName(senderName);
        final String sdpOffer = jsonMessage.get("sdpOffer").getAsString();
        /*
            SDP는 단말 간의 멀티미디어 세션과 관련된 미디어 타입 및 포맷을 협상하는 프로토콜
            제안&수락 (Offer & Answer)모델로 동작
            -> 지금은 제안인듯
         */
        user.receiveVideoFrom(sender, sdpOffer);
        break;
      case "leaveRoom":
        leaveRoom(user);
        break;
      case "onIceCandidate":
        JsonObject candidate = jsonMessage.get("candidate").getAsJsonObject();

        if (user != null) {
          IceCandidate cand = new IceCandidate(candidate.get("candidate").getAsString(),
              candidate.get("sdpMid").getAsString(), candidate.get("sdpMLineIndex").getAsInt());
          user.addCandidate(cand, jsonMessage.get("name").getAsString());
        }
        break;
      case "sendChat": // 한명의 참여자가 채팅을 하면 나머지 참여자에게 해당 채팅 내용을 보낸다.
        sendMsg(jsonMessage);
        break;
      case "sendYTUrl": // 방장이 재생할 유튜브 url을 서버로 보내면 서버는 같은 방에 있는 참여자들에게 url을 알려준다.
        sendYTUrl(jsonMessage);
        break;
      default:
        break;
    }
  }

  @Override
  public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
    // registry에서 userSession을 지우고, 유저를 방에서 퇴장시키는 메소드
    UserSession user = registry.removeBySession(session);
    roomManager.getRoom(user.getRoomName()).leave(user);
  }

  private void sendMsg(JsonObject params) throws IOException {
    // 서버는 지정된 이름으로 등록된 방이 있는지 확인하고, 이 방의 모든 참여자들에게 메세지를 보낸다.
    final String roomName = params.get("room").getAsString();
    final String name = params.get("name").getAsString();
    final String msg = params.get("msg").getAsString();
    log.info("PARTICIPANT {}: send a message {} in room {}", name, msg, roomName);

    // 해당 roomName을 가진 room을 가져온 다음
    Room room = roomManager.getRoom(roomName);
    // 해당 room에 참여한 모든 참여자에게 메세지를 보낸다.
    room.sendAMessageToParticipants(params);
  }

  private void sendYTUrl(JsonObject params) throws IOException {
    // 서버는 지정된 이름으로 등록된 방이 있는지 확인하고, 이 방의 모든 참여자에게 url을 보낸다.
    final String roomName = params.get("room").getAsString();
    final String url = params.get("url").getAsString();
    log.info("ROOM {}: send YouTube URL {}", roomName, url);

    Room room = roomManager.getRoom(roomName);
    room.sendUrlToParticipants(params);
  }

  private void joinRoom(JsonObject params, WebSocketSession session) throws IOException {
    // 서버는 지정된 이름으로 등록된 방이 있는지 확인하고, 이 방에 사용자를 추가하고 사용자를 등록한다.

    // params json안에서 roomName과 참여자 name을 꺼내오고
    final String roomName = params.get("room").getAsString();
    final String name = params.get("name").getAsString();
    // 기록을 남기고
    log.info("PARTICIPANT {}: trying to join room {}", name, roomName);

    // 해당 roomName을 가진 room을 가져온 다음
    Room room = roomManager.getRoom(roomName);
    // 그 room에 참여자를 join시키고 session을 전달한다.
    // return 값으로 오는 건 (userName, 방이름, webSocketSession, 방 파이프라인) + 거기에 UserSession 클래스에서 추가적으로
    // webRTC endpoint를 만들어서 outgoingMedia라는 걸로 줌 (추가적인 내용은 UserSession.java 참고)
    final UserSession user = room.join(name, session);
    // registry에 user를 등록한다.
    registry.register(user);
  }

  private void leaveRoom(UserSession user) throws IOException {
    // 유저가 지금 참여해 있는 방을 가져오고
    final Room room = roomManager.getRoom(user.getRoomName());
    // 해당 방에서 유저를 제거한다.
    room.leave(user);
    // 해당 방의 참여자가 0명이 될 경우, 그 방을 지운다.
    if (room.getParticipants().isEmpty()) {
      roomManager.removeRoom(room);
    }
  }
}
