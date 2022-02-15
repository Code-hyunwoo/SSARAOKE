package com.ssafy.api.reservation.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReservationAddRequest {
    private Long room_seq;
    private int song_no;
    private String title;
    private String artist;
}
