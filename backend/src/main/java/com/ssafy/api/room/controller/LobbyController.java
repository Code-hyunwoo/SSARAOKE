package com.ssafy.api.room.controller;

import com.ssafy.api.auth.resolver.Auth;
import com.ssafy.api.room.dto.request.LobbyCreateRequest;
import com.ssafy.api.room.dto.request.LobbyEnterRequest;
import com.ssafy.api.room.dto.response.LobbyResponse;
import com.ssafy.api.room.service.LobbyService;
import com.ssafy.domain.room.entity.Room;
import com.ssafy.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    ResponseEntity<String> createRoom(@Auth User user, @RequestBody LobbyCreateRequest lobbyCreateRequest) {
        // 방 생성 가능할 때
        if(lobbyService.getRoomCount()<=30) {
            Room room = lobbyService.createRoom(user, lobbyCreateRequest);
            // 방장 입장
            lobbyService.enterRoom(user, new LobbyEnterRequest(room.getSeq(), lobbyCreateRequest.getPassword()));
            return ResponseEntity.ok().body("Success");
        }
        // 더 이상 방을 생성할 수 없을 경우(30개) -> Error
        else {
            return ResponseEntity.status(401).body("방 생성 불가");
        }
    }

    // 방 참가
    @PostMapping("/enter")
    ResponseEntity<String> enterRoom(@Auth User user, LobbyEnterRequest lobbyEnterRequest) {
        // 존재하는 방인지 체크
        if(!lobbyService.existRoom(lobbyEnterRequest.getRoom_seq())){
            return ResponseEntity.status(405).body("존재하지 않는 방");
        }
        // 차단된 유저인지 체크
        if(lobbyService.checkBanUser(user, lobbyEnterRequest)) {
            return ResponseEntity.status(402).body("차단된 사용자");
        }
        // 정원초과 체크
        if(lobbyService.getRoomUserCount(lobbyEnterRequest) >= 8) {
            return ResponseEntity.status(403).body("방 정원 초과");
        }
        // 비밀번호 체크
        if(!lobbyService.checkPassword(lobbyEnterRequest)){
            return ResponseEntity.status(404).body("비밀번호 불일치");
        }

        // 사용자 방 입장
        lobbyService.enterRoom(user, lobbyEnterRequest);

        return ResponseEntity.ok().body("Success");
    }

    // 방 검색
    @GetMapping("/search/{word}")
    ResponseEntity<List<LobbyResponse>> searchRoom(@PathVariable String word) {
        List<LobbyResponse> response = lobbyService.searchRoom(word);

        return ResponseEntity.ok().body(response);
    }

    // 방 태그 검색
    @GetMapping("/tagsearch/{tag_seq}")
    ResponseEntity<List<LobbyResponse>> tagSearchRoom(@PathVariable Long tag_seq) {
        List<LobbyResponse> response = lobbyService.tagSearchRoom(tag_seq);

        return ResponseEntity.ok().body(response);
    }

}
