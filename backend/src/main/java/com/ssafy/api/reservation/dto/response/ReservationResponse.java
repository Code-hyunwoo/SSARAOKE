package com.ssafy.api.reservation.dto.response;

import com.ssafy.domain.reservation.entity.Reservation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReservationResponse {
    private long reservation_seq;
    private String song_no;
    private String song_title;

    public static List<ReservationResponse> of(List<Reservation> reservations) {
        List<ReservationResponse> list = new ArrayList<ReservationResponse>();
        for (int i = 0; i < reservations.size(); i++) {
            list.add(ReservationResponse.of(reservations.get(i)));
        }
        return list;
    }

    private static ReservationResponse of(Reservation reservation) {
        return new ReservationResponse(reservation.getSeq(), reservation.getSong_no(), reservation.getTitle());
    }
}
