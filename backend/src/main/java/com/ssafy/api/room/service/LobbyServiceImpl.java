package com.ssafy.api.room.service;

import com.ssafy.api.room.dto.request.LobbyCreateRequest;
import com.ssafy.api.room.dto.request.LobbyEnterRequest;
import com.ssafy.api.room.dto.response.LobbyResponse;
import com.ssafy.domain.room.entity.Room;
import com.ssafy.domain.room.entity.RoomBan;
import com.ssafy.domain.room.entity.RoomTag;
import com.ssafy.domain.room.repository.RoomRepository;
import com.ssafy.domain.room.repository.RoomTagRepository;
import com.ssafy.domain.tag.entity.Tag;
import com.ssafy.domain.tag.repository.TagRepository;
import com.ssafy.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class LobbyServiceImpl implements LobbyService{

    private final RoomRepository roomRepository;
    private final TagRepository tagRepository;
    private final RoomTagRepository roomTagRepository;

    @Override
    @Transactional(readOnly = true)
    public List<LobbyResponse> getLobby() {
        List<Room> rooms = roomRepository.findAll();

        return getLobbyResponse(rooms);
    }

    @Override
    @Transactional(readOnly = true)
    public long getRoomCount() {
        return roomRepository.count();
    }

    @Override
    @Transactional
    public Room createRoom(User user, LobbyCreateRequest lobbyCreateRequest) {

        Room room = Room.builder()
                .title(lobbyCreateRequest.getTitle())
                .is_private(lobbyCreateRequest.is_private())
                .password(lobbyCreateRequest.getPassword())
                .owner_seq(user.getSeq())
                .owner_nickname(user.getNickname())
                .thumbnail_url(null)
                .build();

        roomRepository.save(room);

        List<Long> tag_seqs = lobbyCreateRequest.getTags();
        for(int i=0; i<tag_seqs.size(); i++){
            Tag tag = tagRepository.findById((long)tag_seqs.get(i)).get();
            RoomTag roomTag = new RoomTag();
            roomTag.setRoom(room);
            roomTag.setTag(tag);

            // Room에도 넣고, RoomTag에도 넣고
            room.addRoomTag(roomTag);
            roomTagRepository.save(roomTag);
        }

        return room;
    }

    @Override
    @Transactional(readOnly = true)
    public boolean existRoom(Long room_seq) {
        Optional<Room> room = roomRepository.findById(room_seq);

        return room==null?false:true;
    }

    @Override
    @Transactional(readOnly = true)
    public boolean checkBanUser(User user, LobbyEnterRequest lobbyEnterRequest) {
        // 차단 유저면 true 리턴
        Room room = roomRepository.findById(lobbyEnterRequest.getRoom_seq()).get();

        List<RoomBan> roomBans = room.getRoomBans();
        for(int i=0; i<roomBans.size(); i++){
            if(roomBans.get(i).getUser().getSeq() == user.getSeq()) {
                return true;
            }
        }

        return false;
    }

    @Override
    @Transactional(readOnly = true)
    public long getRoomUserCount(LobbyEnterRequest lobbyEnterRequest) {
        Room room = roomRepository.findById(lobbyEnterRequest.getRoom_seq()).get();

        return room.getUsers().size();
    }

    @Override
    @Transactional(readOnly = true)
    public boolean checkPassword(LobbyEnterRequest lobbyEnterRequest) {
        Room room = roomRepository.findById(lobbyEnterRequest.getRoom_seq()).get();
        if(!room.is_private()) {
            return true;
        }
        else if(room.getPassword().equals(lobbyEnterRequest.getPassword())) {
            return true;
        }
        return false;
    }

    @Override
    @Transactional
    public void enterRoom(User user, LobbyEnterRequest lobbyEnterRequest) {
        Room room = roomRepository.findById(lobbyEnterRequest.getRoom_seq()).get();

        // Room에 user추가, User에 room추가
        room.addUser(user);
        user.setRoom(room);

    }

    @Override
    @Transactional(readOnly = true)
    public List<LobbyResponse> searchRoom(String word) {
        List<Room> rooms = roomRepository.findByTitleContains(word);

        return getLobbyResponse(rooms);
    }

    @Override
    @Transactional(readOnly = true)
    public List<LobbyResponse> tagSearchRoom(Long tag_seq) {

        // 비효율적
        List<Room> AllRooms = roomRepository.findAll();
        List<Room> rooms = new ArrayList<>();
        for(int i=0; i<AllRooms.size(); i++){
            List<RoomTag> roomTags = AllRooms.get(i).getRoomTags();
            innerF: for(int j=0; j<roomTags.size(); j++){
                if(roomTags.get(j).getTag().getSeq()==tag_seq){
                    rooms.add(AllRooms.get(i));
                    break innerF;
                }
            }
        }

        return getLobbyResponse(rooms);
    }

    public List<LobbyResponse> getLobbyResponse(List<Room> rooms) {
        List<LobbyResponse> list = new ArrayList<LobbyResponse>();
        for(int i = 0; i < rooms.size(); i++) {
            // 비효율적
            List<Tag> tags = new ArrayList<Tag>();
            List<RoomTag> roomTags = rooms.get(i).getRoomTags();
            for(int j = 0; j < roomTags.size(); j++) {
                tags.add(roomTags.get(j).getTag());
            }

            list.add(LobbyResponse.of(rooms.get(i), rooms.get(i).getUsers().size(), tags));
        }
        return list;
    }
}
