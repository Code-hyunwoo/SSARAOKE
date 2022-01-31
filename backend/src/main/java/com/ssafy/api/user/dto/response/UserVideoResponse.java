package com.ssafy.api.user.dto.response;

import com.ssafy.domain.video.entity.Video;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserVideoResponse {
    private String title;
    private String url;
    private LocalDateTime date_created;

    public static List<UserVideoResponse> of(List<Video> videos) {
        List<UserVideoResponse> list = new ArrayList<UserVideoResponse>();
        for(int i = 0; i < videos.size(); i++){
            list.add(UserVideoResponse.of(videos.get(i)));
        }
        return list;
    }

    public static UserVideoResponse of(Video video){
        return new UserVideoResponse(video.getTitle(), video.getUrl(), video.getDate_created());
    }
}
