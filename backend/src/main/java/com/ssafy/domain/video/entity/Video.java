package com.ssafy.domain.video.entity;

import com.ssafy.domain.common.BaseTimeEntity;
import com.ssafy.domain.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Table(name = "TB_VIDEO")
@Entity
public class Video extends BaseTimeEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "video_seq")
    private Long seq;

    @Column(name = "video_url")
    private String url;

    @ManyToOne
    @JoinColumn(name = "user_seq")
    private User user;


}
