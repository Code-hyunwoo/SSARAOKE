package com.ssafy.api.room.service;

import com.ssafy.domain.room.entity.Room;
import com.ssafy.domain.room.repository.RoomRepository;
import com.ssafy.domain.user.entity.User;
import com.ssafy.domain.user.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class RoomServiceTest {
    @Autowired
    RoomService roomService;
    @Autowired
    RoomRepository roomRepository;
    @Autowired
    UserRepository userRepository;

    @Transactional
    @Test
    void getLobby(){
//        User owner = User.builder()
//                .nickname("gooah")
//                .email("ssafy@test.com")
//                .profilePath("somewhere").build();
//        User newOwner = userRepository.save(owner);
//        Room room = Room.builder()
//                .title("testRoom")
//                .is_private(false)
//                .owner_nickname(newOwner.getNickname())
//                .owner_seq(newOwner.getSeq())
//                .thumbnail_url("somewhere").build();

    }

}