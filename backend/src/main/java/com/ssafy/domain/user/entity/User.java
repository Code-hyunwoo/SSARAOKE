package com.ssafy.domain.user.entity;

import com.ssafy.domain.bookmark.entity.Bookmark;
import com.ssafy.domain.common.BaseTimeEntity;
import com.ssafy.domain.room.entity.Room;
import com.ssafy.domain.video.entity.Video;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
@Setter
@NoArgsConstructor
@Table(name = "TB_USER")
public class User extends BaseTimeEntity {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user_seq")
    private Long seq;

    @Column(name = "email")
    private String email;

    @Column(name = "nickname")
    private String nickname;

    @Column
    private LocalDateTime date_updated;

    @Embedded
    private final OAuthInfo oAuthInfo = new OAuthInfo();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Bookmark> bookmarks = new ArrayList<Bookmark>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Video> videos = new ArrayList<Video>();

    @ManyToOne
    @JoinColumn(name = "room_seq")
    private Room room;


    @Builder
    public User(String email, String nickname, String oAuthSeq, OAuthType oAuthType){
        this.email = email;
        this.nickname = nickname;
        this.oAuthInfo.setOauthInfo(oAuthSeq, oAuthType);
    }

    public void updateNicknameAndEmail(String nickname, String email){
        if(nickname != null)
            this.nickname = nickname;
        if(email != null)
            this.email = email;
    }


}
