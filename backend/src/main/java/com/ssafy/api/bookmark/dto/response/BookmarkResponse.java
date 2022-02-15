package com.ssafy.api.bookmark.dto.response;

import com.ssafy.domain.bookmark.entity.Bookmark;
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
public class BookmarkResponse {
    private int song_no;
    private String song_title;
    private String artist;

    public static List<BookmarkResponse> of(List<Bookmark> bookmarks) {
        List<BookmarkResponse> list = new ArrayList<BookmarkResponse>();
        for (int i = 0; i < bookmarks.size(); i++) {
            list.add(BookmarkResponse.of(bookmarks.get(i)));
        }
        return list;
    }

    private static BookmarkResponse of(Bookmark bookmark) {
        return new BookmarkResponse(bookmark.getSong_no(), bookmark.getTitle(), bookmark.getArtist());
    }

}
