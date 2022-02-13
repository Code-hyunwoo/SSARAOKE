package com.ssafy.api.room.service;

import com.ssafy.api.room.dto.request.LobbyCreateRequest;
import com.ssafy.api.room.dto.request.LobbyEnterRequest;
import com.ssafy.api.room.dto.response.LobbyResponse;
import com.ssafy.domain.room.entity.Room;
import com.ssafy.domain.user.entity.User;

import java.util.List;

public interface LobbyService {

    List<LobbyResponse> getLobby();
    long getRoomCount();
    Room createRoom(User user, LobbyCreateRequest lobbyCreateRequest);
    boolean existRoom(Long room_seq);
    boolean checkBanUser(User user, Long room_seq);
    long getRoomUserCount(LobbyEnterRequest lobbyEnterRequest);
    boolean checkPassword(LobbyEnterRequest lobbyEnterRequest);
    Room enterRoom(User user, LobbyEnterRequest lobbyEnterRequest);
    List<LobbyResponse> searchRoom(String word);
    List<LobbyResponse> tagSearchRoom(String tag_name);
}
