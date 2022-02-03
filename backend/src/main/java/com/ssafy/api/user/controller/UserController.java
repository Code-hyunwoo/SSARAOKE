package com.ssafy.api.user.controller;

import com.ssafy.api.auth.resolver.Auth;
import com.ssafy.api.user.dto.request.UserUpdateRequest;
import com.ssafy.api.user.dto.response.UserResponse;
import com.ssafy.api.user.dto.response.UserUpdateResponse;
import com.ssafy.api.user.dto.response.UserVideoResponse;
import com.ssafy.api.user.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("api/v1/user")
@RestController
public class UserController {

    private final UserService userService;

    @GetMapping("")
    public ResponseEntity<UserResponse> getUserInfo(@Auth User user){
        UserResponse response = userService.getMyPage(user);
        return ResponseEntity.ok().body(response);
    }

    @PatchMapping("")
    public ResponseEntity<UserUpdateResponse> updateUserInfo(@Auth User user, @RequestBody UserUpdateRequest request){
        UserUpdateResponse response = userService.updateUserNickname(user, request);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping("/quit")
    public ResponseEntity<String> quit(@Auth User user){
        boolean is_quit = userService.quit(user.getSeq());
        return ResponseEntity.ok().body("Success");
    }

    @GetMapping("/video")
    public ResponseEntity<List<UserVideoResponse>> getVideo(@Auth User user){
        List<UserVideoResponse> list = userService.getVideos(user);
        return ResponseEntity.ok().body(list);
    }

}
