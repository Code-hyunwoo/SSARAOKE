package com.ssafy.api.bookmark.service;

import com.ssafy.api.bookmark.dto.request.BookmarkAddRequest;
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
public class BookmarkServiceImpl implements BookmarkService{

    private final BookmarkRepository bookmarkRepository;

    @Transactional
    @Override
    public List<BookmarkResponse> list(User user) {
        Bookmark bookmark = bookmarkRepository.findById(user.getSeq()).get();
//        List<Bookmark> list = (List<Bookmark>) bookmark.getUser();
        List<Bookmark> list = bookmark.getUser().getBookmarks();

        return BookmarkResponse.of(list);
    }

    @Transactional
    @Override
    public void add(BookmarkAddRequest bookmarks) {
    Bookmark bookmark = new Bookmark();
    bookmark.Add(bookmarks.getSong_no(),bookmarks.getTitle(),bookmarks.getArtist());
    bookmarkRepository.save(bookmark);
    }

    @Transactional
    @Override
    public void delete(int song_no){
    bookmarkRepository.deleteById((long) song_no);
    }

}
