package com.ssafy.domain.room.domain;

import com.ssafy.domain.common.BaseTimeEntity;
import com.ssafy.domain.reservation.domain.Reservation;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Table(name = "TB_ROOM")
@Entity
public class Room extends BaseTimeEntity{
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "room_seq")
    private Long seq;

    @Column(name = "room_title")
    private String title;

    @Column
    private LocalDateTime date_closed;

    @Column
    private LocalDateTime date_expired;

    @Column
    private boolean is_active;

    @Column
    private boolean is_private;

    @Column
    private String password;

    @Column
    private Long owner_seq;

    @Column
    private String owner_nickname;

    @OneToMany(mappedBy = "room")
    private List<RoomUser> roomUsers = new ArrayList<RoomUser>();

    @OneToMany(mappedBy = "room")
    private List<Reservation> reservations = new ArrayList<Reservation>();


}
