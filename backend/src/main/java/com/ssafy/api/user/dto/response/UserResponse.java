package com.ssafy.api.user.dto.response;

import com.ssafy.domain.bookmark.entity.Bookmark;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private String nickname;
    private String email = "";
    private List<Bookmark> bookmarks;

}
