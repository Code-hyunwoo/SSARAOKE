package com.ssafy.api.room.service;

import com.ssafy.api.room.dto.response.LobbyResponse;

import java.util.List;

public interface RoomService {
    public List<LobbyResponse> getLobby();
}
