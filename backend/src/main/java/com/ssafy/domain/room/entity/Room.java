package com.ssafy.domain.room.entity;

import com.ssafy.common.exception.CustomException;
import com.ssafy.common.exception.ErrorCode;
import com.ssafy.domain.common.BaseTimeEntity;
import com.ssafy.domain.reservation.entity.Reservation;
import com.ssafy.domain.user.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.tomcat.jni.Local;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
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

    @Column
    private String thumbnail_url;

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Reservation> reservations = new ArrayList<Reservation>();

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RoomTag> roomTags = new ArrayList<RoomTag>();

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RoomBan> roomBans = new ArrayList<RoomBan>();

    @OneToMany(mappedBy = "room")
    private List<User> users = new ArrayList<User>();

    @Builder
    public Room(String title, boolean is_private, String password, Long owner_seq, String owner_nickname, String thumbnail_url){
        this.title = title;
        this.is_active = true;
        this.is_private = is_private;
        this.password = password;
        this.owner_seq = owner_seq;
        this.owner_nickname = owner_nickname;
        this.thumbnail_url = thumbnail_url;

    }

    public void setThumbnailUrl(String thumbnail_url){
        if(thumbnail_url != null){
            this.thumbnail_url = thumbnail_url;
        }
    }

    public void setOwner(Long owner_seq, String owner_nickname){
        this.owner_seq = owner_seq;
        this.owner_nickname = owner_nickname;
    }

    public void addUser(User user){
        if(!this.users.contains(user)){
            this.users.add(user);
        }
        user.setRoom(this);
    }

    public void removeUser(Long user_seq){
        User user = findUserByUserSeq(user_seq);
        user.setRoom(null);
        this.users.remove(user);
    }

    public void removeAllUser(){
        for (User user:this.users) {
            user.setRoom(null);
        }
        this.users.clear();
    }

    public User findUserByUserSeq(Long user_seq){
        return this.users.stream()
                .filter(user->user.getSeq().equals(user_seq))
                .findFirst()
                .orElseThrow(()->new CustomException(ErrorCode.USER_NOT_FOUND));
    }

}
