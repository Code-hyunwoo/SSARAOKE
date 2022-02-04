package com.ssafy.api.room.service;

import com.ssafy.api.room.dto.request.RoomThumbnailRequest;
import com.ssafy.api.room.dto.request.RoomUserRequest;
import com.ssafy.api.room.dto.response.RoomUserResponse;
import com.ssafy.common.exception.CustomException;
import com.ssafy.common.exception.ErrorCode;
import com.ssafy.domain.room.entity.Room;
import com.ssafy.domain.room.entity.RoomBan;
import com.ssafy.domain.room.repository.RoomBanRepository;
import com.ssafy.domain.room.repository.RoomRepository;
import com.ssafy.domain.user.entity.OAuthType;
import com.ssafy.domain.user.entity.User;
import com.ssafy.domain.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.event.annotation.BeforeTestClass;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@Slf4j
@SpringBootTest
@Transactional
class RoomServiceTest {
    @Autowired
    RoomService roomService;
    @Autowired
    RoomRepository roomRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoomBanRepository roomBanRepository;

    @BeforeEach
    void initialize(){
        User user = User.builder().email("test0216@ssafy.com").nickname("test0216").oAuthSeq("960216").oAuthType(OAuthType.KAKAO).build();
        userRepository.save(user);
        User owner = userRepository.findAll().get(0);
        Room room = Room.builder().title("테스트아이유").owner_seq(owner.getSeq()).owner_nickname(owner.getNickname()).thumbnail_url("prethumbnail").is_private(false).build();
        room.addUser(owner);
        roomRepository.save(room);
    }


    @Test
    void saveThumbnailTest(){
        //do
        String newThumbnail = "newthumbnail";
        Room newRoom = roomRepository.findAll().get(0);
        roomService.saveThumbnail(new RoomThumbnailRequest(newRoom.getSeq(), newThumbnail));
        Room res = roomRepository.findById(newRoom.getSeq())
                .orElseThrow(()->new CustomException(ErrorCode.USER_NOT_FOUND));

        assertEquals(newThumbnail, res.getThumbnail_url());
    }

    @Test
    void assignOwner(){
        User newOwner = User.builder().nickname("test0330").email("test0330@ssafy.com").oAuthSeq("52411631234").oAuthType(OAuthType.KAKAO).build();
        userRepository.save(newOwner);
        Room room = roomRepository.findAll().get(0);
        User owned = userRepository.findById(room.getOwner_seq()).get();
        RoomUserRequest request = new RoomUserRequest(room.getSeq(), newOwner.getSeq());
        roomService.assignOwner(owned, request);

        Room changed = roomRepository.findById(room.getSeq()).get();
        assertEquals(newOwner.getSeq(), changed.getOwner_seq());

    }

    @Test
    void getUserList(){
        User user1 = User.builder().nickname("test9830").email("test9830@ssafy.com").oAuthSeq("33411231956").oAuthType(OAuthType.KAKAO).build();
        User user2 = User.builder().nickname("test9830").email("test9830@ssafy.com").oAuthSeq("33411231956").oAuthType(OAuthType.KAKAO).build();
        Room room = roomRepository.findAll().get(0);
        room.addUser(user1);
        room.addUser(user2);

        int i = (int)room.getUsers().size();    //.stream().count()
        List<RoomUserResponse> res = roomService.getUserList(room.getSeq());
        int j = res.size();
        assertEquals(i, j);
    }

    @Test
    void ban(){
        User user1 = User.builder().nickname("test9830").email("test9830@ssafy.com").oAuthSeq("33411231956").oAuthType(OAuthType.KAKAO).build();
        User user2 = User.builder().nickname("test6615").email("test6615@ssafy.com").oAuthSeq("29314295453").oAuthType(OAuthType.KAKAO).build();
        userRepository.save(user1);
        userRepository.save(user2);
        Room room = roomRepository.findAll().get(0);
        log.debug("room_seq: " + room.getSeq());
        room.addUser(user1);
        room.addUser(user2);
        roomRepository.save(room);

        User owner = userRepository.findById(room.getOwner_seq()).get();

        int i = (int)room.getUsers().size();    //.stream().count()
        Long banned_seq = room.getUsers().get(1).getSeq();
        RoomUserRequest request = new RoomUserRequest(room.getSeq(), banned_seq);

        roomService.ban(owner, request);
        Room changed = roomRepository.findById(room.getSeq()).get();
        int j = (int)changed.getUsers().size();
        User finallybanned = userRepository.findById(banned_seq).get();

        RoomBan roomBan = roomBanRepository.findRoomBanByUserSeq(banned_seq).stream().findFirst().get();

        assertEquals(i-1, j);                                       //방에서 한명 빠졌는지 확인
        assertEquals(null, finallybanned.getRoom());                //강탈된 유저가 정말 룸에 없는지 확인
        assertEquals(finallybanned.getSeq(), roomBan.getUser().getSeq());   //roomban 테이블에서 해당 유저 아이디로 검색했을 떄 뜨는지 확인
        assertEquals(room.getSeq(), roomBan.getRoom().getSeq());
    }

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

        roomService.out(saved1, room.getSeq());
        Room changed = roomRepository.findById(room.getSeq()).get();
        int j = (int)changed.getUsers().size();
        User outed = userRepository.findById(saved1.getSeq()).get();

        assertEquals(i-1, j);
        assertEquals(null, outed.getRoom());
    }

    @Test
    void disappear(){
        User user1 = User.builder().nickname("test9830").email("test9830@ssafy.com").oAuthSeq("33411231956").oAuthType(OAuthType.KAKAO).build();
        User user2 = User.builder().nickname("test6615").email("test6615@ssafy.com").oAuthSeq("29314295453").oAuthType(OAuthType.KAKAO).build();
        userRepository.save(user2);
        Room room = roomRepository.findAll().get(0);
        room.addUser(user1);
        room.addUser(user2);
        roomRepository.save(room);
        Long owner_seq = room.getOwner_seq();
        int i = (int)room.getUsers().size();    //.stream().count()

        roomService.disappear(room.getSeq());
        Room changed = roomRepository.findById(room.getSeq()).get();
        int j = (int)changed.getUsers().size();
        Long newOwner_seq = changed.getOwner_seq();
        //random 배정 어떻게 테스트하냐
        assertEquals(i-1, j);
        assertNotEquals(owner_seq, newOwner_seq);   //통과 못하다가 갑자기 통과하는데 아무리 돌려봐도 계속 통과함 반례찾기
    }

    @Test
    void deleteRoom(){
        this.ban();
        Room room = roomRepository.findAll().get(0);
        User user = room.getUsers().get(0);
        User bannedUser = roomBanRepository.findAll().get(0).getUser();
        roomService.deleteRoom(room.getSeq());
        
        //user에서 room 삭제됐는지 확인해야 함
        assertEquals(null, user.getRoom());
        //roomban 삭제됐는지 확인해야 함 어케함
        //room 삭제됐는지 확인해야 함 어케함
    }
//    public void deleteRoom(Long room_seq);

}