package com.ssafy.api.room.dto.response;

import com.ssafy.domain.room.entity.Room;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LobbyCreateResponse {
    private Long room_seq;
    private String title;

    public static LobbyCreateResponse of(Room room) {
        return new LobbyCreateResponse(room.getSeq(), room.getTitle());
    }
}
