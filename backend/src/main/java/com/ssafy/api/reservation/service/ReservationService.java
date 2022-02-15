package com.ssafy.api.reservation.service;

import com.ssafy.api.reservation.dto.request.ReservationAddRequest;
import com.ssafy.api.reservation.dto.request.ReservationDeleteRequest;
import com.ssafy.api.reservation.dto.response.ReservationResponse;

import java.util.List;

public interface ReservationService {
    List<ReservationResponse> add(ReservationAddRequest reservation);
    List<ReservationResponse> delete(ReservationDeleteRequest reservationDeleteRequest);
    List<ReservationResponse> getReservationList(Long room_seq);
    ReservationResponse getFirst(Long room_seq);
    List<ReservationResponse> getTwo(Long room_seq);
}