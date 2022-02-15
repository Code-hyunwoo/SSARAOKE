package com.ssafy.api.reservation.controller;

import com.ssafy.api.reservation.dto.request.ReservationAddRequest;
import com.ssafy.api.reservation.dto.request.ReservationDeleteRequest;
import com.ssafy.api.reservation.dto.response.ReservationResponse;
import com.ssafy.api.reservation.service.ReservationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@Slf4j
@RequiredArgsConstructor
@RequestMapping("api/v1/reservation")
@RestController
public class ReservationController {

    private final ReservationService reservationService;

    //예약 목록 추가
    @PostMapping("/add")
    ResponseEntity<List<ReservationResponse>>add(@RequestBody ReservationAddRequest reservationAddRequest){
        List<ReservationResponse>add = reservationService.add(reservationAddRequest);
        return ResponseEntity.ok().body(add);
    }

    //예약 목록 삭제
    @DeleteMapping("/delete")
    ResponseEntity<List<ReservationResponse>>delete(@RequestBody ReservationDeleteRequest reservationDeleteRequest){
        List<ReservationResponse>delete = reservationService.delete(reservationDeleteRequest);
        return ResponseEntity.ok().body(delete);
    }

    //예약 목록 호출
    @GetMapping("/list/{room_seq}")
    ResponseEntity<List<ReservationResponse>>getReservationList(@PathVariable("room_seq") Long room_seq){
        List<ReservationResponse> response = reservationService.getReservationList(room_seq);
        return ResponseEntity.ok().body(response);
    }

}
