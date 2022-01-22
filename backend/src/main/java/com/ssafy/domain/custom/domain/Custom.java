package com.ssafy.domain.custom.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Table(name = "TB_CUSTOM")
@Entity
public class Custom {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "custom_seq")
    private Long seq;

    @Column(columnDefinition = "varchar(10) default 'TJ'")
    private String company;

    @Column
    private int song_no;

    @Column
    private String lyrics;

    @Column
    private String mr_url;

    @Column
    private String video_url;

    @Column(name = "song_title")
    private String title;

    @Column
    private String composer;

    @Column
    private String lyricist;

    @Column
    private String artist;

    @Column
    private String year;



}
