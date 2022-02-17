package com.ssafy.domain.bookmark.entity;

import com.ssafy.domain.user.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Table(name = "TB_BOOKMARK")
@Entity
public class Bookmark {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "bookmark_seq")
    private Long seq;

    @ManyToOne
    @JoinColumn(name = "user_seq")
    private User user;

    @Column
    private int song_no;

    @Column(name = "song_title")
    private String title;

    @Column
    private String artist;

    @Builder
    public Bookmark(String title, String artist, User user){
        this.title = title;
        this.artist = artist;
        this.user = user;
    }

}
