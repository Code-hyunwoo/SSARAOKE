package com.ssafy.domain.tag.entity;

import com.ssafy.domain.room.entity.RoomTag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "TB_TAG")
@Entity
public class Tag {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "tag_seq")
    private Long seq;

    @Column(name = "tag_category")
    private TagCategory category;

    @Column
    private String tag_name;

}
