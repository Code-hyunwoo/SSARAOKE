package com.ssafy.api.user.service;

import com.ssafy.api.user.dto.response.UserResponse;
import com.ssafy.api.user.dto.UserUpdateDto;
import com.ssafy.api.user.dto.response.UserVideoResponse;
import com.ssafy.domain.user.entity.User;

import java.util.List;

public interface UserService {
    UserResponse getMyPage(User user);
    UserUpdateDto updateNickname(User user, String newNickname);
    UserUpdateDto updateEmail(User user, String newEmail);
    void quit(Long seq);
    List<UserVideoResponse> getVideos(User user);

}
