package com.ssafy.api.room.service;

import com.ssafy.api.room.dto.response.LobbyResponse;
import com.ssafy.domain.room.entity.Room;
import com.ssafy.domain.room.entity.RoomUser;
import com.ssafy.domain.room.repository.RoomRepository;
import com.ssafy.domain.room.repository.RoomUserRepository;
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
    private final RoomUserRepository roomUserRepository;

    @Transactional(readOnly = true)
    @Override
    public List<LobbyResponse> getLobby() {
        List<Room> rooms = roomRepository.findRoomByIs_activeIsTrue();
        List<LobbyResponse> response = new ArrayList<>();
        for(int i = 0; i < rooms.size(); i++){
            int current = roomUserRepository.findRoomUserByRoomSeqAndIs_inIsTrue(rooms.get(i).getSeq());
            List<Tag> tagList = new ArrayList<>();
            for(int j = 0; j < rooms.get(i).getRoomTags().size(); j++){
                tagList.add(rooms.get(i).getRoomTags().get(j).getTag());
            }
            response.add(LobbyResponse.of(rooms.get(i), current, tagList));
        }
        return response;
    }
}
