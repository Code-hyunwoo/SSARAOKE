package com.ssafy.api.user.dto.response;

import com.ssafy.domain.bookmark.entity.Bookmark;
import lombok.AllArgsConstructor;

import java.awt.print.Book;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
public class UserBookmarkResponse {
    private Long seq;
    private int song_no;
    private String title;
    private String artist;

    public static UserBookmarkResponse of(Bookmark bookmark){
        return new UserBookmarkResponse(bookmark.getSeq(), bookmark.getSong_no(), bookmark.getTitle(), bookmark.getArtist());
    }

    public static List<UserBookmarkResponse> of(List<Bookmark> list){
        List<UserBookmarkResponse> responses = new ArrayList<>();
        for(Bookmark bookmark : list){
            responses.add(UserBookmarkResponse.of(bookmark));
        }
        return responses;
    }
}
