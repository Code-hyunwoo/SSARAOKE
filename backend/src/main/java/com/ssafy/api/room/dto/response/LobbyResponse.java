package com.ssafy.api.room.dto.response;

import com.ssafy.domain.room.entity.Room;
import com.ssafy.domain.tag.entity.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
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
    public boolean isPrivate;
    public String thumbnail_url;

    public static List<LobbyResponse> of(List<Room> rooms) {
        List<LobbyResponse> list = new ArrayList<LobbyResponse>();
        for(int i = 0; i < rooms.size(); i++){
            // tagList는 서비스 단에서 할 예정
            list.add(LobbyResponse.of(rooms.get(i), rooms.get(i).getUsers().size(), null));
        }
        return list;
    }

    public static LobbyResponse of(Room room, int current, List<Tag> tagList){
        return new LobbyResponse(room.getSeq(), room.getTitle(), current, tagList, room.getOwner_nickname(), room.is_private(), room.getThumbnail_url());
    }

}
