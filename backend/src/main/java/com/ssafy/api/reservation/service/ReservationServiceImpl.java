package com.ssafy.api.reservation.service;

import com.ssafy.api.reservation.dto.request.ReservationAddRequest;
import com.ssafy.api.reservation.dto.request.ReservationDeleteRequest;
import com.ssafy.api.reservation.dto.response.ReservationResponse;
import com.ssafy.common.exception.CustomException;
import com.ssafy.common.exception.ErrorCode;
import com.ssafy.domain.reservation.entity.Reservation;
import com.ssafy.domain.reservation.repository.ReservationRepository;
import com.ssafy.domain.room.entity.Room;
import com.ssafy.domain.room.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;
    private final RoomRepository roomRepository;

    @Transactional
    @Override
    public List<ReservationResponse> add(ReservationAddRequest reservationAddRequest) {
        //db에 리퀘스트로 받은 데이터를 넣어준다.
        Room room = roomRepository.findById(reservationAddRequest.getRoom_seq())
                .orElseThrow(()->new CustomException(ErrorCode.ROOM_NOT_FOUND));
        Reservation reservation = Reservation.builder()
                .room(room)
                .song_no(reservationAddRequest.getSong_no())
                .title(reservationAddRequest.getTitle())
                .build();
        reservationRepository.save(reservation);
        return getReservationList(room.getSeq());
    }

    @Transactional
    @Override
    public List<ReservationResponse> delete(ReservationDeleteRequest reservationDeleteRequest) {
        //db에 리퀘스트로 받은 데이터를 삭제한다.
        reservationRepository.deleteById(reservationDeleteRequest.getReservation_seq());
        return getReservationList(reservationDeleteRequest.getRoom_seq());
    }

    @Transactional(readOnly = true)
    @Override
    public List<ReservationResponse> getReservationList(Long room_seq) {
        Room room = roomRepository.findById(room_seq)
                .orElseThrow(()->new CustomException(ErrorCode.ROOM_NOT_FOUND));
        List<Reservation> list = room.getReservations();
        return ReservationResponse.of(list);
    }

}
