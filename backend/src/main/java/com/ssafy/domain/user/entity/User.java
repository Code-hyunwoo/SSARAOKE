package com.ssafy.domain.user.entity;

import com.ssafy.common.exception.CustomException;
import com.ssafy.common.exception.ErrorCode;
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

    public void setRoom(Room room){
        if(this.room != null){
            this.room.getUsers().remove(this);
        }
        this.room = room;
        if(room != null && !room.getUsers().contains(this)){
            this.room.getUsers().add(this);
        }
    }

    public void updateNickname(String nickname){
        if(nickname != null){
            this.nickname = nickname;
        }
    }

    public void updateEmail(String email){
        if(email != null){
            this.email = email;
        }
    }

    public void addVideo(Video video){
        if(!this.videos.contains(video)){
            this.videos.add(video);
        }
        video.setUser(this);
    }

    public Long deleteBookmarkByTitle(String title){
        Bookmark bookmark = findBookmarkByTitle(title);
        this.bookmarks.remove(bookmark);
        return bookmark.getSeq();
    }

    public Bookmark findBookmarkByTitle(String title){
        return this.bookmarks.stream()
                .filter(bookmark -> bookmark.getTitle().equals(title))
                .findFirst()
                .orElseThrow(()->new CustomException(ErrorCode.BOOKMARK_NOT_FOUND));
    }




}
