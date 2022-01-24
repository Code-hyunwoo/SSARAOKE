package com.ssafy.api.auth.controller;

import com.ssafy.api.auth.dto.request.AuthCreationRequestDto;
import com.ssafy.api.auth.dto.request.AuthRequestDto;
import com.ssafy.api.auth.dto.response.OAuthDto;
import com.ssafy.api.auth.service.AuthService;
import com.ssafy.common.util.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.net.URI;

@RequiredArgsConstructor
@RequestMapping("api/v1/auth")
@RestController
public class AuthController {
    private final AuthService authService;

    @PostMapping("/")
    public ResponseEntity<Void> authenticateLegacy(@RequestBody AuthRequestDto requestDto, HttpServletResponse response){
        OAuthDto oAuthDto = authService.authenticate(requestDto);
        JwtTokenProvider.setTokenInHeader(response, oAuthDto.getToken());
        return ResponseEntity.ok().build();
    }

    @PostMapping("/join")
    public ResponseEntity<URI> join(@RequestBody AuthCreationRequestDto requestDto, HttpServletResponse response){
        OAuthDto oAuthDto = authService.signUp(requestDto);
        JwtTokenProvider.setTokenInHeader(response, oAuthDto.getToken());
        URI userCreateUri = ServletUriComponentsBuilder
                .fromCurrentServletMapping()
                .path("/api/v1/users/{id}")
                .buildAndExpand(oAuthDto.getSeq())
                .toUri();
        return ResponseEntity.created(userCreateUri).build();
    }

}
