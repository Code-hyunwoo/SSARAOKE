package com.ssafy.api.user.dto.response;

import com.ssafy.domain.room.domain.Room;
import com.ssafy.domain.room.domain.RoomUser;
import com.ssafy.domain.tag.domain.Tag;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor
public class RoomHistoryResponse {

    private String title;
    private LocalDateTime date_created;
    private boolean is_private;
    private List<Tag> tags;

    public static RoomHistoryResponse of(Room room){
        //설정코드 넣어야 함
        return new RoomHistoryResponse();
    }
}
