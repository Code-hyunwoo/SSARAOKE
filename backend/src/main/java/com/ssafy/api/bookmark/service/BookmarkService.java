package com.ssafy.api.bookmark.service;

import com.ssafy.api.bookmark.dto.request.BookmarkRequest;
import com.ssafy.api.bookmark.dto.response.BookmarkResponse;
import com.ssafy.domain.user.entity.User;

import java.util.List;

public interface BookmarkService {
    List<BookmarkResponse> list(User user);
    void add(User user, BookmarkRequest bookmark);
    void delete(User user, String title);
}
