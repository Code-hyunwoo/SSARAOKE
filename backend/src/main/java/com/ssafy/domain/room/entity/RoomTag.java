package com.ssafy.domain.room.entity;

import com.ssafy.domain.tag.entity.Tag;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Table(name = "TB_ROOM_TAG")
@Entity
public class RoomTag {

    @Column(name = "roomtag_seq")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    Long id;

    @ManyToOne
    @JoinColumn(name = "room_seq")
    Room room;

    @ManyToOne
    @JoinColumn(name = "tag_seq")
    Tag tag;


}
