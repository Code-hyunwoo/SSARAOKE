package com.ssafy.api.bookmark.controller;

import com.ssafy.api.auth.resolver.Auth;
import com.ssafy.api.bookmark.dto.request.BookmarkRequest;
import com.ssafy.api.bookmark.dto.response.BookmarkResponse;
import com.ssafy.api.bookmark.service.BookmarkService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@Slf4j
@RequiredArgsConstructor
@RequestMapping("api/v1/bookmark")
@RestController
public class BookmarkController {

    private final BookmarkService bookmarkService;

    @GetMapping("/list")
    ResponseEntity<List<BookmarkResponse>> list(@Auth User user) {
        List<BookmarkResponse> list = bookmarkService.list(user);
        return ResponseEntity.ok().body(list);
    }

    @PostMapping("/add")
    ResponseEntity<? extends BaseResponseBody> add(@Auth User user, @RequestBody BookmarkRequest bookmarkAddRequest) {
        bookmarkService.add(user, bookmarkAddRequest);
        return ResponseEntity.ok().body(BaseResponseBody.of(200, "Success"));
    }

    @DeleteMapping("/delete")
    ResponseEntity<? extends BaseResponseBody> delete(@Auth User user, @RequestBody BookmarkRequest bookmarkRequest) {
        bookmarkService.delete(user, bookmarkRequest.getTitle());
        return ResponseEntity.ok().body(BaseResponseBody.of(200, "Success"));
    }
}