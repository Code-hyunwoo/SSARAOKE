package com.ssafy.api.user.service;

import com.ssafy.api.user.dto.request.UserUpdateRequest;
import com.ssafy.api.user.dto.response.UserResponse;
import com.ssafy.api.user.dto.response.UserUpdateResponse;
import com.ssafy.domain.user.entity.User;

public interface UserService {
    UserResponse getMyPage(User user);
    UserUpdateResponse updateUserNickname(User user, UserUpdateRequest request);

}
