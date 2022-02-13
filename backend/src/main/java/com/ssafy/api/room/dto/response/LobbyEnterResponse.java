package com.ssafy.api.room.dto.response;

import com.ssafy.api.room.dto.request.LobbyEnterRequest;
import com.ssafy.domain.room.entity.Room;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LobbyEnterResponse {
    private String mode;

    public static LobbyEnterResponse of(Room room) {return new LobbyEnterResponse(room.getMode());}
}
