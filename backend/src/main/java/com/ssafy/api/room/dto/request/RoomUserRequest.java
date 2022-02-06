package com.ssafy.api.room.dto.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class RoomUserRequest {
    Long room_seq;
    Long user_seq;

    @Builder
    public RoomUserRequest(Long room_seq, Long user_seq){
        this.room_seq = room_seq;
        this.user_seq = user_seq;
    }
}
