package com.ssafy.api.room.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
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
    @JsonProperty
    private boolean isPrivate;
    private String password;
}
