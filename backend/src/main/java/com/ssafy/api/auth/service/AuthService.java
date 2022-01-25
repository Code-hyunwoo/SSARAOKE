package com.ssafy.api.auth.service;

import com.ssafy.api.auth.dto.request.AuthCreationRequestDto;
import com.ssafy.api.auth.dto.request.AuthRequestDto;
import com.ssafy.api.auth.dto.response.OAuthDto;
import com.ssafy.domain.user.entity.User;

public interface AuthService {
    public OAuthDto signUp(AuthCreationRequestDto requestDto);
    public String refreshToken(User user);
}
