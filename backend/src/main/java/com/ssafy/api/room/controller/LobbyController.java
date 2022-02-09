package com.ssafy.api.room.controller;

import com.ssafy.api.auth.resolver.Auth;
import com.ssafy.api.room.dto.request.LobbyCreateRequest;
import com.ssafy.api.room.dto.request.LobbyEnterRequest;
import com.ssafy.api.room.dto.response.LobbyCreateResponse;
import com.ssafy.api.room.dto.response.LobbyResponse;
import com.ssafy.api.room.service.LobbyService;
import com.ssafy.common.exception.CustomException;
import com.ssafy.common.exception.ErrorCode;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.domain.room.entity.Room;
import com.ssafy.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@Slf4j
@RequiredArgsConstructor
@RequestMapping("api/v1/lobby")
@RestController
public class LobbyController {

    private final LobbyService lobbyService;

    // 전체 방 조회
    @GetMapping("")
    ResponseEntity<List<LobbyResponse>> getLobby() {
        List<LobbyResponse> response = lobbyService.getLobby();
        return ResponseEntity.ok().body(response);
    }

    // 방 생성
    @PostMapping("")
    ResponseEntity<LobbyCreateResponse> createRoom(@Auth User user, @RequestBody LobbyCreateRequest lobbyCreateRequest) {
        // 방 생성 가능할 때
        Room room = lobbyService.createRoom(user, lobbyCreateRequest);
            // 방장 입장
//            lobbyService.enterRoom(user, new LobbyEnterRequest(room.getSeq(), lobbyCreateRequest.getPassword()));
        return ResponseEntity.ok().body(LobbyCreateResponse.of(room));

    }

    // 방 참가
    @PostMapping("/enter")
    ResponseEntity<? extends BaseResponseBody> enterRoom(@Auth User user, LobbyEnterRequest lobbyEnterRequest) {
        // 사용자 방 입장
        lobbyService.enterRoom(user, lobbyEnterRequest);
        return ResponseEntity.ok().body(BaseResponseBody.of(200, "Success"));
    }

    // 방 검색
    @GetMapping("/search/{word}")
    ResponseEntity<List<LobbyResponse>> searchRoom(@PathVariable String word) {
        List<LobbyResponse> response = lobbyService.searchRoom(word);
        return ResponseEntity.ok().body(response);
    }

    // 방 태그 검색
    @GetMapping("/tagsearch/{tag_seq}")
    ResponseEntity<List<LobbyResponse>> tagSearchRoom(@PathVariable String tag_name) {
        List<LobbyResponse> response = lobbyService.tagSearchRoom(tag_name);
        return ResponseEntity.ok().body(response);
    }

}
