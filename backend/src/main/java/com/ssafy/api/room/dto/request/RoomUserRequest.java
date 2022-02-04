package com.ssafy.api.room.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RoomUserRequest {
    Long room_seq;
    Long user_seq;
}
