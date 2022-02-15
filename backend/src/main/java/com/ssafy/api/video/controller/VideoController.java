package com.ssafy.api.video.controller;

import com.ssafy.api.auth.resolver.Auth;
import com.ssafy.api.video.dto.request.VideoRecVideoRequest;
import com.ssafy.api.video.service.VideoService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.domain.user.entity.User;
import com.ssafy.domain.video.entity.Video;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@Slf4j
@RequiredArgsConstructor
@RequestMapping("api/v1/bookmark")
@RestController
public class VideoController {

    private final VideoService videoService;

    @PostMapping("/recvideo")
    ResponseEntity<? extends BaseResponseBody> recvideo(@Auth User user, @RequestBody VideoRecVideoRequest videoRecVideoRequest) {
        videoService.recvideo(user, videoRecVideoRequest);
        return ResponseEntity.ok().body(BaseResponseBody.of(200,"Success"));
    }
}
