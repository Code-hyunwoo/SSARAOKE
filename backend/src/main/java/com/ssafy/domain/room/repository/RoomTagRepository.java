package com.ssafy.domain.room.repository;

import com.ssafy.domain.room.entity.Room;
import com.ssafy.domain.room.entity.RoomTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface RoomTagRepository  extends JpaRepository<RoomTag, Long> {
    @Query("select rt.room from RoomTag rt where rt.tag.seq = :tag_seq")
    List<Room> findAllByTag_Seq(@Param("tag_seq") Long tag_seq);
}
