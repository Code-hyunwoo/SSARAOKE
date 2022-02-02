package com.ssafy.domain.room.entity;

import com.ssafy.domain.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@Table(name = "TB_ROOM_USER")
@Entity
public class RoomUser {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "room_user_seq")
    private Long seq;

    @Column
    private LocalDateTime date_in;

    @Column
    private LocalDateTime date_out;

    @Column
    private boolean is_in;

    @ManyToOne
    @JoinColumn(name = "user_seq")
    private User user;

    @Column(name = "user_nickname")
    private String nickname;

    @ManyToOne
    @JoinColumn(name = "room_seq")
    private Room room;


}
