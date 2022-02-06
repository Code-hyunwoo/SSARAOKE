package com.ssafy.api.room.dto.request;

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
public class LobbyCreateRequest {
    private String title;
    private List<String> tags;
    private boolean is_private;
    private String password;
}
