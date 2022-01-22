package com.ssafy.domain.reservation.domain;

import com.ssafy.domain.room.domain.Room;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.checkerframework.checker.units.qual.C;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Table(name = "TB_RESERVATION")
@Entity
public class Reservation {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "reservation_seq")
    private Long seq;

    @ManyToOne
    @JoinColumn(name = "room_seq")
    private Room room;

    @Column
    private int song_no;

    @Column(name = "song_title")
    private String title;

    @Column
    private String artist;

}
