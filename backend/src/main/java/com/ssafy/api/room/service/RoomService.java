package com.ssafy.api.room.service;

import com.ssafy.api.room.dto.request.RoomThumbnailRequest;
import com.ssafy.api.room.dto.request.RoomUserRequest;
import com.ssafy.api.room.dto.response.RoomUserResponse;
import com.ssafy.domain.user.entity.User;

import java.util.List;

public interface RoomService {
    public void saveThumbnail(RoomThumbnailRequest request);

    public void assignOwner(User user, RoomUserRequest request);

    public List<RoomUserResponse> getUserList(Long room_seq);

    public void ban(User user, RoomUserRequest request);

    public void out(User user, Long room_seq);

    public RoomUserResponse disappear(Long room_seq);

    public void deleteRoom(Long room_seq);
}
