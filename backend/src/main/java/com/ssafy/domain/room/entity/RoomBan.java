package com.ssafy.domain.room.entity;

import com.ssafy.domain.user.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
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

    @Builder
    public RoomBan(Room room, User user){
        this.room = room;
        this.user = user;
    }
}
