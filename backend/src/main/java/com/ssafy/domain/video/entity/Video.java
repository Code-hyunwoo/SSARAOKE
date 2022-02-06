package com.ssafy.domain.video.entity;

import com.ssafy.domain.common.BaseTimeEntity;
import com.ssafy.domain.user.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    @Builder
    public Video(User user, String url) {
        this.user = user;
        this.url = url;
    }


    public void setUser(User user) {
        if (this.user != null) {
            this.user.getVideos().remove(this);
        }
        this.user = user;
        if (user != null && !user.getVideos().contains(this)) {
            this.user.getVideos().add(this);
        }
    }

}
