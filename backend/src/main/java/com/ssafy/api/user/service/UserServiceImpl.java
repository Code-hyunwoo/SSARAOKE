package com.ssafy.api.user.service;

import com.ssafy.api.user.dto.request.UserUpdateRequest;
import com.ssafy.api.user.dto.response.UserResponse;
import com.ssafy.api.user.dto.response.UserUpdateResponse;
import com.ssafy.api.user.dto.response.UserVideoResponse;
import com.ssafy.common.exception.CustomException;
import com.ssafy.common.exception.ErrorCode;
import com.ssafy.domain.bookmark.entity.Bookmark;
import com.ssafy.domain.user.entity.User;
import com.ssafy.domain.user.repository.UserRepository;
import com.ssafy.domain.video.entity.Video;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    @Override
    public UserResponse getMyPage(User user) {
        List<Bookmark> list = user.getBookmarks();
        return new UserResponse(user.getNickname(), user.getEmail(), list);
    }

    @Transactional
    @Override
    public UserUpdateResponse updateUserNickname(User user, UserUpdateRequest request) {
        if(userRepository.existsByNickname(request.getNickname())){
            throw new CustomException(ErrorCode.DUPLICATE_NICKNAME);
        }
        if(userRepository.existsByEmail(request.getEmail())){
            throw new CustomException(ErrorCode.DUPLICATE_EMAIL);
        }
        user.updateNicknameAndEmail(request.getNickname(), request.getEmail());
        return new UserUpdateResponse(user.getNickname(), user.getNickname());
    }

    @Transactional
    @Override
    public boolean quit(Long seq) {
        if(!userRepository.existsById(seq)){
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        }
        userRepository.deleteById(seq);
        return true;
    }

    @Transactional(readOnly = true)
    @Override
    public List<UserVideoResponse> getVideos(User user) {
        List<Video> videos = user.getVideos();
        return UserVideoResponse.of(videos);
    }

}
