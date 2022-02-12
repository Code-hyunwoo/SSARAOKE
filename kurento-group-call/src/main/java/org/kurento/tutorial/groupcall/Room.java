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

import java.io.Closeable;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

import javax.annotation.PreDestroy;

import org.kurento.client.Continuation;
import org.kurento.client.MediaPipeline;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.socket.WebSocketSession;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonPrimitive;

/**
 * @author Ivan Gracia (izanmail@gmail.com)
 * @since 4.3.1
 */
public class Room implements Closeable {
    private final Logger log = LoggerFactory.getLogger(Room.class);

    // ConcurrentHashMap은 multi-thread환경에서 사용할 수 있도록 나온 메서드임(기능은 HashMap이랑 비슷)
    // 참여자
    private final ConcurrentMap<String, UserSession> participants = new ConcurrentHashMap<>();
    // 각 방마다 가지고 있는 고유의 파이프 라인(Notion에서 설명)
    private final MediaPipeline pipeline;
    // 방의 이름
    private final String name;

    // 방의 이름 getter
    public String getName() {
        return name;
    }

    // room의 생성자 (room이름과 고유 파이프라인) -> 방이 생성될때 호출
    public Room(String roomName, MediaPipeline pipeline) {
        this.name = roomName;
        this.pipeline = pipeline;
        log.info("ROOM {} has been created", roomName);
    }

    @PreDestroy
    // 방 끝날때 호출되는 메소드
    private void shutdown() {
        this.close();
    }

    // 유저가 유저 이름과, session을 가지고 join 시도를 함
    public UserSession join(String userName, WebSocketSession session) throws IOException {
        log.info("ROOM {}: adding participant {}", this.name, userName);
        // 방에 저장할 참여자 객체를 만드는데 (유저이름, 방이름, WebSocketSession, 방 고유 파이프라인)을 가지고 만듬
        final UserSession participant = new UserSession(userName, this.name, session, this.pipeline);
        // 기존에 있던 참여자들에게 새로운 참여자가 왔음을 알리는 메서드
        joinRoom(participant);
        // 새로운 참여자를 방 참여자 리스트에 넣음
        participants.put(participant.getName(), participant);
        sendParticipantNames(participant);
        // 새로운 참여자 정보를 return
        return participant;
    }

    public void leave(UserSession user) throws IOException {
        log.debug("PARTICIPANT {}: Leaving room {}", user.getName(), this.name);
        this.removeParticipant(user.getName());
        user.close();
    }

    // 새로운 참여자가 들어왔을 때 호출 (방에 참여자를 추가함)
    private Collection<String> joinRoom(UserSession newParticipant) throws IOException {
        // 새로운 참여자의 표시와 정보를 json에 저장
        final JsonObject newParticipantMsg = new JsonObject();
        newParticipantMsg.addProperty("id", "newParticipantArrived");
        newParticipantMsg.addProperty("name", newParticipant.getName());

        // 기존에 참여하고 있던 참여자들의 리스트
        final List<String> participantsList = new ArrayList<>(participants.values().size());
        log.debug("ROOM {}: notifying other participants of new participant {}", name,
                newParticipant.getName());

        // 기존 방에 있던 참여자들의 session을 통해서
        for (final UserSession participant : participants.values()) {
            try {
                // 기존 참여자들에게 새로운 참여자를 알림
                participant.sendMessage(newParticipantMsg);
            } catch (final IOException e) {
                log.debug("ROOM {}: participant {} could not be notified", name, participant.getName(), e);
            }
            // 알림을 받은 참여자들을 리스트에 넣고
            participantsList.add(participant.getName());
        }
        // 알림을 받은 참여자들을 리턴
        return participantsList;
    }

    public void sendAMessageToParticipants(JsonObject params) throws IOException {
        // 메세지를 보낸 참여자의 이름과 방이름, 메세지를 json에 저장
        final JsonObject newMsg = new JsonObject();
        newMsg.addProperty("id", "receiveChat");
        newMsg.addProperty("name", params.get("name").getAsString());
        newMsg.addProperty("room", name);
        newMsg.addProperty("msg", params.get("msg").getAsString());

        // 기존 방에 있던 참여자들의 session을 통해서 메세지를 전달함
        for (final UserSession participant : participants.values()) {
            try {
                participant.sendMessage(newMsg);
            } catch (final IOException e) {
                log.debug("Room {}: participant {} could not receive a message", name, participant.getName());
            }
        }
    }

    public void sendUrlToParticipants(JsonObject params) throws IOException {
        // url이 틀어질 방의 이름과 url을 json에 저장
        final JsonObject newUrl = new JsonObject();
        newUrl.addProperty("id", "receiveYTUrl");
        newUrl.addProperty("room", name);
        newUrl.addProperty("url", params.get("url").getAsString());

        // 기존 방에 있던 참여자들의 session을 통해서 url을 전달함
        for(final UserSession participant : participants.values()) {
            try {
                participant.sendMessage(newUrl);
            } catch (final IOException e) {
                log.debug("Room {}: participant {} could not receive url", name, participant.getName());
            }
        }
    }

    private void removeParticipant(String name) throws IOException {
        participants.remove(name);

        log.debug("ROOM {}: notifying all users that {} is leaving the room", this.name, name);

        final List<String> unnotifiedParticipants = new ArrayList<>();
        final JsonObject participantLeftJson = new JsonObject();
        participantLeftJson.addProperty("id", "participantLeft");
        participantLeftJson.addProperty("name", name);
        for (final UserSession participant : participants.values()) {
            try {
                participant.cancelVideoFrom(name);
                participant.sendMessage(participantLeftJson);
            } catch (final IOException e) {
                unnotifiedParticipants.add(participant.getName());
            }
        }

        if (!unnotifiedParticipants.isEmpty()) {
            log.debug("ROOM {}: The users {} could not be notified that {} left the room", this.name,
                    unnotifiedParticipants, name);
        }

    }

    public void sendParticipantNames(UserSession user) throws IOException {

        final JsonArray participantsArray = new JsonArray();
        // 기존 참여자 리스트를 돌면서
        for (final UserSession participant : this.getParticipants()) {
            // 새로운 참여자를 제외한 기존 참여자들의 이름을 paricipantsArray에 저장
            if (!participant.equals(user)) {
                final JsonElement participantName = new JsonPrimitive(participant.getName());
                participantsArray.add(participantName);
            }
        }

        final JsonObject existingParticipantsMsg = new JsonObject();
        existingParticipantsMsg.addProperty("id", "existingParticipants");
        existingParticipantsMsg.add("data", participantsArray);
        log.debug("PARTICIPANT {}: sending a list of {} participants", user.getName(),
                participantsArray.size());
        // 기존 참여자 리스트를 새로운 참여자에게 보내줌
        user.sendMessage(existingParticipantsMsg);
    }

    public Collection<UserSession> getParticipants() {
        return participants.values();
    }

    public UserSession getParticipant(String name) {
        return participants.get(name);
    }

    @Override
    public void close() {
        for (final UserSession user : participants.values()) {
            try {
                user.close();
            } catch (IOException e) {
                log.debug("ROOM {}: Could not invoke close on participant {}", this.name, user.getName(),
                        e);
            }
        }

        participants.clear();

        pipeline.release(new Continuation<Void>() {

            @Override
            public void onSuccess(Void result) throws Exception {
                log.trace("ROOM {}: Released Pipeline", Room.this.name);
            }

            @Override
            public void onError(Throwable cause) throws Exception {
                log.warn("PARTICIPANT {}: Could not release Pipeline", Room.this.name);
            }
        });

        log.debug("Room {} closed", this.name);
    }

}
