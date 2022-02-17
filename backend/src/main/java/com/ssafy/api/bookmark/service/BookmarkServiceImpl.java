package com.ssafy.api.bookmark.service;

import com.ssafy.api.bookmark.dto.request.BookmarkRequest;
import com.ssafy.api.bookmark.dto.response.BookmarkResponse;
import com.ssafy.domain.bookmark.entity.Bookmark;
import com.ssafy.domain.bookmark.repository.BookmarkRepository;
import com.ssafy.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BookmarkServiceImpl implements BookmarkService {

    private final BookmarkRepository bookmarkRepository;

    @Transactional(readOnly = true)
    @Override
    public List<BookmarkResponse> list(User user) {
        List<Bookmark> list = user.getBookmarks();
        return BookmarkResponse.of(list);
    }

    @Transactional
    @Override
    public void add(User user, BookmarkRequest bookmarks) {
//        if(!user.isBookmarkNotExist(bookmarks.getSong_no())){
//            throw new CustomException(ErrorCode.EXIST_SONG_NO);
//        }
        Bookmark bookmark = Bookmark.builder()
                .title(bookmarks.getTitle())
                .user(user)
                .build();
        bookmarkRepository.save(bookmark);
    }

    @Transactional
    @Override
    public void delete(User user, String title) {
        Long bookmark_seq = user.deleteBookmarkByTitle(title);
        bookmarkRepository.deleteById(bookmark_seq);
    }

}
