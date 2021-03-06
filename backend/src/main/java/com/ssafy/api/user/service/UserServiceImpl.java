package com.ssafy.api.user.service;

import com.ssafy.api.user.dto.response.UserBookmarkResponse;
import com.ssafy.api.user.dto.response.UserResponse;
import com.ssafy.api.user.dto.UserUpdateDto;
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

import java.util.List;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    @Override
    public UserResponse getMyPage(User user) {
        List<Bookmark> list = user.getBookmarks();
        return new UserResponse(user.getNickname(), user.getEmail(), UserBookmarkResponse.of(list));
    }

    @Transactional
    @Override
    public UserUpdateDto updateNickname(User user, String newNickname) {
        if (userRepository.existsByNickname(newNickname)) {
            throw new CustomException(ErrorCode.DUPLICATE_NICKNAME);
        }
        user.updateNickname(newNickname);
        return new UserUpdateDto(user.getNickname());
    }

    @Transactional
    @Override
    public UserUpdateDto updateEmail(User user, String newEmail) {
        if (userRepository.existsByEmail(newEmail)) {
            throw new CustomException(ErrorCode.DUPLICATE_EMAIL);
        }
        user.updateEmail(newEmail);
        return new UserUpdateDto(user.getNickname());
    }

    @Transactional
    @Override
    public void quit(Long seq) {
        if (!userRepository.existsById(seq)) {
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        }
        userRepository.deleteById(seq);
    }

    @Transactional(readOnly = true)
    @Override
    public List<UserVideoResponse> getVideos(User user) {
        List<Video> videos = user.getVideos();
        return UserVideoResponse.of(videos);
    }

}
