package com.ssafy.api.room.controller;

import com.ssafy.api.auth.resolver.Auth;
import com.ssafy.api.room.dto.request.RoomThumbnailRequest;
import com.ssafy.api.room.dto.request.RoomUserRequest;
import com.ssafy.api.room.dto.response.RoomUserResponse;
import com.ssafy.api.room.service.RoomService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.domain.bookmark.entity.Bookmark;
import com.ssafy.domain.bookmark.repository.BookmarkRepository;
import com.ssafy.domain.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("api/v1/room")
@RestController
public class RoomController {

    private final RoomService roomService;

    @PostMapping("/thumbnail")
    ResponseEntity<? extends BaseResponseBody> getRoomThumbnail(@RequestBody RoomThumbnailRequest request) {
        roomService.saveThumbnail(request);
        return ResponseEntity.ok().body(BaseResponseBody.of(200, "Success"));
    }

    @PostMapping("/assign")
    ResponseEntity<? extends BaseResponseBody> assignOwner(@Auth User user, @RequestBody RoomUserRequest request) {
        roomService.assignOwner(user, request);
        return ResponseEntity.ok().body(BaseResponseBody.of(200, "Success"));
    }

    @GetMapping("/users/{room_seq}")
    ResponseEntity<List<RoomUserResponse>> getUserList(@PathVariable("room_seq") Long room_seq) {
        List<RoomUserResponse> response = roomService.getUserList(room_seq);
        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/ban")
    ResponseEntity<? extends BaseResponseBody> ban(@Auth User user, @RequestBody RoomUserRequest request) {
        roomService.ban(user, request);
        return ResponseEntity.ok().body(BaseResponseBody.of(200, "Success"));
    }

    @PostMapping("/out/{room_seq}")
    ResponseEntity<? extends BaseResponseBody> out(@Auth User user, @PathParam("room_seq") Long room_seq) {
        roomService.out(user, room_seq);
        return ResponseEntity.ok().body(BaseResponseBody.of(200, "Success"));
    }

    @GetMapping("/disappear/{room_seq}")
    ResponseEntity<RoomUserResponse> dissapear(@PathParam("room_seq") Long room_seq) {
        RoomUserResponse response = roomService.disappear(room_seq);
        return ResponseEntity.ok().body(response);
    }

    @DeleteMapping("/{room_seq}")
    ResponseEntity<? extends BaseResponseBody> delete(@PathParam("room_seq") Long room_seq) {
        roomService.deleteRoom(room_seq);
        return ResponseEntity.ok().body(BaseResponseBody.of(200, "Success"));
    }
}
