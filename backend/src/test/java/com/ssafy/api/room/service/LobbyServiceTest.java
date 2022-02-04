package com.ssafy.api.room.service;

import com.ssafy.api.room.dto.request.LobbyCreateRequest;
import com.ssafy.api.room.dto.request.LobbyEnterRequest;
import com.ssafy.api.room.dto.response.LobbyResponse;
import com.ssafy.domain.room.entity.Room;
import com.ssafy.domain.room.repository.RoomRepository;
import com.ssafy.domain.room.repository.RoomTagRepository;
import com.ssafy.domain.tag.repository.TagRepository;
import com.ssafy.domain.user.entity.OAuthType;
import com.ssafy.domain.user.entity.User;
import com.ssafy.domain.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;


import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@Slf4j
@SpringBootTest
@Transactional
class LobbyServiceTest {

    @Autowired
    LobbyService lobbyService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoomRepository roomRepository;
    @Autowired
    TagRepository tagRepository;
    @Autowired
    RoomTagRepository roomTagRepository;

    @BeforeEach
    void initialize() {
        // 유저
        User user = User.builder()
                .email("hyeseung0124@gmail.com")
                .nickname("hs")
                .oAuthSeq("980124")
                .oAuthType(OAuthType.KAKAO)
                .build();
        userRepository.save(user);

    }

    // 방 생성 후, 전체 방 조회
    @Test
    void getAllRooms() {
        createRoom();

        LobbyResponse testRoom = lobbyService.getLobby().get(0);

        assertEquals(testRoom.getTitle(), "룸생성테스트");
    }

    void createRoom() {
        User owner = userRepository.findAll().get(0);
        List<Long> tags = new ArrayList<>();
        tags.add(30L);
        tags.add(25L);

        LobbyCreateRequest lobbyCreateRequest = new LobbyCreateRequest("룸생성테스트", tags, true, "1234");

        lobbyService.createRoom(owner, lobbyCreateRequest);
    }

    // 방 참가
    @Test
    void enterRoom() {
        createRoom();

        User newUser = User.builder()
                .email("test0124@gmail.com")
                .nickname("newhs")
                .oAuthSeq("980124")
                .oAuthType(OAuthType.KAKAO)
                .build();
        userRepository.save(newUser);

        Room room = roomRepository.findAll().get(0);
        LobbyEnterRequest lobbyEnterRequest = new LobbyEnterRequest(room.getSeq(), room.getPassword());

        lobbyService.enterRoom(newUser, lobbyEnterRequest);

        assertEquals(room.getUsers().get(0).getNickname(), newUser.getNickname());
    }

    // 방 검색
    @Test
    void searchRoom() {
        createRoom();

        List<LobbyResponse> list = lobbyService.searchRoom("생성");

        assertEquals(list.get(0).getTitle(), "룸생성테스트");
    }

    // 태그로 방 검색
    @Test
    void tagSearchRoom() {
        createRoom();

        List<LobbyResponse> list = lobbyService.tagSearchRoom(30L);

        assertEquals(list.get(0).getTitle(), "룸생성테스트");
    }
}