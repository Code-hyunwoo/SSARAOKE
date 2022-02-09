package com.ssafy.api.user.controller;

import com.ssafy.api.auth.resolver.Auth;
import com.ssafy.api.user.dto.response.UserResponse;
import com.ssafy.api.user.dto.UserUpdateDto;
import com.ssafy.api.user.dto.response.UserVideoResponse;
import com.ssafy.api.user.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
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

    @PatchMapping("/email")
    public ResponseEntity<UserUpdateDto> updateUserEmail(@Auth User user, @RequestBody UserUpdateDto newEmail){
        UserUpdateDto response = userService.updateEmail(user, newEmail.getChanged());
        return ResponseEntity.ok().body(response);
    }

    @PatchMapping("/nickname")
    public ResponseEntity<UserUpdateDto> updateUserNickname(@Auth User user, @RequestBody UserUpdateDto newNickname){
        UserUpdateDto response = userService.updateNickname(user, newNickname.getChanged());
        return ResponseEntity.ok().body(response);
    }


    @GetMapping("/quit")
    public ResponseEntity<? extends BaseResponseBody> quit(@Auth User user){
        userService.quit(user.getSeq());
        return ResponseEntity.ok().body(BaseResponseBody.of(200, "Success"));
    }

    @GetMapping("/video")
    public ResponseEntity<List<UserVideoResponse>> getVideo(@Auth User user){
        List<UserVideoResponse> list = userService.getVideos(user);
        return ResponseEntity.ok().body(list);
    }

}
