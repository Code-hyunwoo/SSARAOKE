package com.ssafy.api.video.service;

import com.ssafy.api.video.dto.request.VideoRecVideoRequest;
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
    public void recvideo(VideoRecVideoRequest videoRecVideoRequest) {
        Video video = new Video();
        video.setUrl(videoRecVideoRequest.getUrl());
        videoRepository.save(video);
    }
}
