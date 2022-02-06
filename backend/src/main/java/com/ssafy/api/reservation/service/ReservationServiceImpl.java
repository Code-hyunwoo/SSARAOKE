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
        Room room = roomRepository.findById(reservationAddRequest.getRoom_seq()).get();
        Reservation reservation = new Reservation();
        reservation.Add((room),reservationAddRequest.getSong_no(),reservationAddRequest.getTitle(),reservationAddRequest.getArtist());
        reservationRepository.save(reservation);

        Reservation reservations = reservationRepository.findById(reservationAddRequest.getRoom_seq())
                .orElseThrow(()->new CustomException(ErrorCode.RESERVATION_NOT_FOUND));
        List<Reservation> list = reservations.getRoom().getReservations();

        return ReservationResponse.of(list);
    }

    @Transactional
    @Override
    public List<ReservationResponse> delete(ReservationDeleteRequest reservationDeleteRequest) {
        //db에 리퀘스트로 받은 데이터를 삭제한다.
        reservationRepository.deleteById(reservationDeleteRequest.getReservation_seq());
        Room room = roomRepository.findById(reservationDeleteRequest.getRoom_seq()).get();
        List<Reservation> list = room.getReservations();

        return ReservationResponse.of(list);
    }

    @Transactional
    @Override
    public List<ReservationResponse> getReservationList(Long room_seq) {
        Room room = roomRepository.findById(room_seq).get();
        List<Reservation> list = room.getReservations();

        return ReservationResponse.of(list);
    }

}
