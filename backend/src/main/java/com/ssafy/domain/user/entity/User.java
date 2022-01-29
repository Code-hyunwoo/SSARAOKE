package com.ssafy.domain.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import com.ssafy.domain.bookmark.domain.Bookmark;
import com.ssafy.domain.common.BaseTimeEntity;
import com.ssafy.domain.room.domain.RoomUser;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * 유저 모델 정의.
 */
//ddd DOMAIN  DRINVEN DEVELOP
@Entity
@Getter
@NoArgsConstructor
@Table(name = "TB_USER")
public class User extends BaseTimeEntity {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user_seq")
    private Long seq;

    @Column(name = "email")
    private String email;

    @Column(name = "nickname", unique = true)
    private String nickname;

    @JsonIgnore
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "password")
    private String password;

    @Column
    private LocalDateTime date_updated;

    @Embedded
    private final OAuthInfo oAuthInfo = new OAuthInfo();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Bookmark> bookmarks = new ArrayList<Bookmark>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RoomUser> roomUsers = new ArrayList<RoomUser>();

    public User(String email, String password){
        this.email = email;
        this.password = password;
    }

    @Builder
    public User(String email, String nickname, String oAuthSeq, OAuthType oAuthType, String profilePath){
        this.email = email;
        this.nickname = nickname;
        this.oAuthInfo.setOauthInfo(oAuthSeq, oAuthType, profilePath);
    }

    public void updateNickname(String nickname){
        this.nickname = nickname;
    }


}
