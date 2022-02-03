package com.ssafy.api.room.service;

import com.ssafy.api.room.dto.response.LobbyResponse;
import com.ssafy.domain.room.entity.Room;
import com.ssafy.domain.room.repository.RoomRepository;
import com.ssafy.domain.tag.entity.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class RoomServiceImpl implements RoomService{

    private final RoomRepository roomRepository;

    @Transactional(readOnly = true)
    @Override
    public List<LobbyResponse> getLobby() {
        List<Room> rooms = roomRepository.findRoomByIs_activeIsTrue();
        List<LobbyResponse> response = new ArrayList<>();

        return response;
    }
}
