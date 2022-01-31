package com.ssafy.domain.room.entity;

import com.ssafy.domain.user.entity.User;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Table(name = "TB_ROOM_BAN")
@Entity
public class RoomBan {
    @Column(name = "room_ban_seq")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    Long id;

    @ManyToOne
    @JoinColumn(name = "room_seq")
    Room room;

    @ManyToOne
    @JoinColumn(name = "user_seq")
    User user;

}
