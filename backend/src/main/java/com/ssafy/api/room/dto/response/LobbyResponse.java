package com.ssafy.api.room.dto.response;

import com.ssafy.domain.room.entity.Room;
import com.ssafy.domain.tag.entity.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LobbyResponse {
    private Long room_seq;
    private String title;
    private int current;
    private List<Tag> tagList;
    public String owner_nickname;
    public boolean is_private;
    public String thumbnail_url;

    public static LobbyResponse of(Room room, int current, List<Tag> tagList){
        return new LobbyResponse(room.getSeq(), room.getTitle(), current, tagList, room.getOwner_nickname(), room.is_private(), room.getThumbnail_url());
    }

}
