package com.ssafy.api.user.controller;

import com.ssafy.api.auth.dto.request.AuthCreationRequestDto;
import com.ssafy.api.auth.dto.response.OAuthDto;
import com.ssafy.api.auth.resolver.Auth;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.common.util.JwtTokenProvider;
import com.ssafy.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("api/v1/user")
@RestController
public class UserController {

    @GetMapping("")
    public ResponseEntity<User> getUserInfo(@Auth User user){
        Long seq = user.getSeq();
        return ResponseEntity.status(200).body(user);
    }
}
