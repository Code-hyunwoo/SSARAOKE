package com.ssafy.api.user.service;

import com.ssafy.api.user.dto.request.UserUpdateRequest;
import com.ssafy.api.user.dto.response.UserResponse;
import com.ssafy.api.user.dto.response.UserUpdateResponse;
import com.ssafy.api.user.dto.response.UserVideoResponse;
import com.ssafy.domain.user.entity.User;

import java.util.List;

public interface UserService {
    UserResponse getMyPage(User user);
    UserUpdateResponse updateUserNickname(User user, UserUpdateRequest request);
    boolean quit(Long seq);
    List<UserVideoResponse> getVideos(User user);

}
