package com.ssafy.api.video.service;

import com.ssafy.api.video.dto.request.VideoRecVideoRequest;
import com.ssafy.domain.user.entity.User;
import com.ssafy.domain.video.entity.Video;
import com.ssafy.domain.video.repository.VideoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class VideoServiceImpl implements VideoService {

    private final VideoRepository videoRepository;

    @Transactional
    @Override
    public void recvideo(User user, VideoRecVideoRequest videoRecVideoRequest) {
        Video video = Video.builder()
                        .url(videoRecVideoRequest.getUrl())
                        .user(user)
                        .build();
        videoRepository.save(video);
        user.addVideo(video);
    }
}
