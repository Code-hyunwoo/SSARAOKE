package com.ssafy.api.video.service;

import com.ssafy.api.video.dto.request.VideoRecVideoRequest;
import com.ssafy.domain.user.entity.User;

public interface VideoService {
    void recvideo(User user, VideoRecVideoRequest videoRecVideoRequest);
}
