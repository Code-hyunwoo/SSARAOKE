package com.ssafy.domain.room.entity;

import com.ssafy.domain.tag.entity.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Table(name = "TB_ROOM_TAG")
@AllArgsConstructor
@NoArgsConstructor
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
