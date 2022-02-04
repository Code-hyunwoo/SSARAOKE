package com.ssafy.domain.room.repository;

import com.ssafy.domain.room.entity.RoomTag;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RoomTagRepository  extends JpaRepository<RoomTag, Long> {
}
