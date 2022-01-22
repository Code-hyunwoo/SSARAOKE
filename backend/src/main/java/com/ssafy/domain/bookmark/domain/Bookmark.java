package com.ssafy.domain.bookmark.domain;

import com.ssafy.domain.user.entity.User;
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

    @Column(columnDefinition = "varchar(10) default 'TJ'")
    private String company;


}
