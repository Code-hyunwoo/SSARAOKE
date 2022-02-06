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
import com.ssafy.domain.user.entity.User;
import com.ssafy.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RequiredArgsConstructor
@Service
public class RoomServiceImpl implements RoomService{

    private final RoomRepository roomRepository;
    private final UserRepository userRepository;
    private final RoomBanRepository roomBanRepository;


    @Transactional
    @Override
    public void saveThumbnail(RoomThumbnailRequest request) {
        Room room = roomRepository.findById(request.getRoom_seq())
                .orElseThrow(()->new CustomException(ErrorCode.ROOM_NOT_FOUND));
        room.setThumbnailUrl(request.getThumbnail_url());
    }

    @Transactional
    @Override
    public void assignOwner(User owner, RoomUserRequest request) {
        Room room = roomRepository.findById(request.getRoom_seq())
                .orElseThrow(()->new CustomException(ErrorCode.ROOM_NOT_FOUND));
        if(room.getOwner_seq() != owner.getSeq()){
            throw new CustomException(ErrorCode.INVALID_OWNER);
        }
        User newOwner = userRepository.findById(request.getUser_seq())
                .orElseThrow(()->new CustomException(ErrorCode.USER_NOT_FOUND));
        room.setOwner(newOwner.getSeq(), newOwner.getNickname());
    }

    @Transactional(readOnly = true)
    @Override
    public List<RoomUserResponse> getUserList(Long room_seq) {
        Room room = roomRepository.findById(room_seq)
                .orElseThrow(()->new CustomException(ErrorCode.ROOM_NOT_FOUND));
        return RoomUserResponse.of(room.getUsers());
    }

    @Transactional
    @Override
    public void ban(User owner, RoomUserRequest request) {
        //방에서 지우기
        Room room = roomRepository.findById(request.getRoom_seq())
                .orElseThrow(()->new CustomException(ErrorCode.ROOM_NOT_FOUND));
        if(room.getOwner_seq() != owner.getSeq()){
            throw new CustomException(ErrorCode.INVALID_OWNER);
        }
        room.removeUser(request.getUser_seq());

        //RoomBan에 추가
        User banned = userRepository.findById(request.getUser_seq())
                .orElseThrow(()->new CustomException(ErrorCode.USER_NOT_FOUND));
        RoomBan roomBan = RoomBan.builder()
                .room(room)
                .user(banned)
                .build();
        roomBanRepository.save(roomBan);
        //signalling server에서 연결을 끊어야 하는데 이거 클라단에서 함 더 해줘야 할 듯
    }

    @Transactional
    @Override
    public void out(User user, Long room_seq) {
        Room room = roomRepository.findById(room_seq)
                .orElseThrow(()->new CustomException(ErrorCode.ROOM_NOT_FOUND));
        List<User> list = room.getUsers();
        if(!list.contains(user)){
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        }
        room.removeUser(user.getSeq());
    }

    @Transactional
    @Override
    public RoomUserResponse disappear(Long room_seq) {
        //방에서 방장 지우기
        Room room = roomRepository.findById(room_seq)
                .orElseThrow(()-> new CustomException(ErrorCode.ROOM_NOT_FOUND));
        User deleted = userRepository.findById(room.getOwner_seq())
                        .orElseThrow(()->new CustomException(ErrorCode.USER_NOT_FOUND));
        room.removeUser(deleted.getSeq());
        //새로운 방장 정하기
        List<User> users = room.getUsers();
        int i = (int)Math.random()*users.size();
        User newOwner = users.get(i);
        room.setOwner(newOwner.getSeq(), newOwner.getNickname());
        return new RoomUserResponse(newOwner.getSeq(), newOwner.getNickname());
    }

    @Transactional
    @Override
    public void deleteRoom(Long room_seq) {
        //방 강퇴 리스트 삭제
        roomBanRepository.deleteAllByRoom_Seq(room_seq);
        //방 삭제
        Room room = roomRepository.findById(room_seq)
                .orElseThrow(()->new CustomException(ErrorCode.ROOM_NOT_FOUND));
        room.removeAllUser();
        roomRepository.deleteById(room_seq);
    }
}
