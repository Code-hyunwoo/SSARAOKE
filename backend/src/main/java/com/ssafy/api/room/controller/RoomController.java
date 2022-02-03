package com.ssafy.api.room.controller;

import com.ssafy.api.room.dto.response.LobbyResponse;
import com.ssafy.api.room.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("api/v1/room")
@RestController
public class RoomController {

    private final RoomService roomService;

    ResponseEntity<List<LobbyResponse>> getLobby(){
        List<LobbyResponse> response = roomService.getLobby();
        return ResponseEntity.ok().body(response);
    }
}
