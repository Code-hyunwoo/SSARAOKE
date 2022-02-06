package com.ssafy.api.room.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoomThumbnailRequest {
    private Long room_seq;
    private String thumbnail_url;
}
