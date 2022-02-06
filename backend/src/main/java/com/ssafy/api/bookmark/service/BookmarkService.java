package com.ssafy.api.bookmark.service;

import com.ssafy.api.bookmark.dto.request.BookmarkAddRequest;
import com.ssafy.api.bookmark.dto.response.BookmarkResponse;
import com.ssafy.domain.user.entity.User;

import java.util.List;

public interface BookmarkService {
    List<BookmarkResponse> list(User user);
    void add(BookmarkAddRequest bookmark);
    void delete(int song_no);
}
