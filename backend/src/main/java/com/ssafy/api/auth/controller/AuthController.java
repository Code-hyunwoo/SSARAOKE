package com.ssafy.api.auth.controller;

import com.ssafy.api.auth.dto.request.AuthRequestDto;
import com.ssafy.api.auth.dto.response.OAuthDto;
import com.ssafy.api.auth.service.AuthService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.common.util.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("api/v1/auth")
@RestController
public class AuthController {
    private final AuthService authService;


    @PostMapping("/kakao")
    public ResponseEntity<OAuthDto> userEnter(@RequestBody AuthRequestDto requestDto, HttpServletResponse response){
        OAuthDto oAuthDto = authService.signUp(requestDto);
        return ResponseEntity.ok().body(oAuthDto);
    }

}
