package com.ssafy.api.room.dto.response;

import com.ssafy.domain.user.entity.User;
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
public class RoomUserResponse {
    private Long seq;
    private String nickname;

    public static RoomUserResponse of(User user){
        return new RoomUserResponse(user.getSeq(), user.getNickname());
    }

    public static List<RoomUserResponse> of(List<User> users){
        List<RoomUserResponse> dtos = new ArrayList<RoomUserResponse>();
        for (User user : users) {
            dtos.add(RoomUserResponse.of(user));
        }
        return dtos;
    }
}
