package com.ssafy.domain.room.domain;

import com.ssafy.domain.common.BaseTimeEntity;
import com.ssafy.domain.reservation.domain.Reservation;
import com.ssafy.domain.tag.domain.Tag;
import com.ssafy.domain.user.entity.User;
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

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Reservation> reservations = new ArrayList<Reservation>();

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RoomTag> roomTags = new ArrayList<RoomTag>();

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RoomBan> roomBans = new ArrayList<RoomBan>();


}
