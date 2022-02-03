package com.ssafy.domain.room.repository;

import com.ssafy.domain.room.entity.Room;
import com.ssafy.domain.room.entity.RoomTag;
import com.ssafy.domain.tag.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomTagRepository  extends JpaRepository<RoomTag, Long> {
    List<Room> findByTag(Tag tag);
}
