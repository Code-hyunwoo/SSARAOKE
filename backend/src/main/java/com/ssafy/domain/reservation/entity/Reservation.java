package com.ssafy.domain.reservation.entity;

import com.ssafy.domain.room.entity.Room;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private String song_no;

    @Column(name = "song_title")
    private String title;

    @Builder
    public Reservation(Room room, String song_no, String title){
        this.room = room;
        this.song_no = song_no;
        this.title = title;
    }

    public void setRoom(Room room) {
        this.room = room;
    }
}
