package com.ssafy.domain.room.repository;

import com.ssafy.domain.room.entity.RoomUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomUserRepository extends JpaRepository<RoomUser, Long> {
    @Query("select count(u.seq) from RoomUser u where u.is_in = true and u.room.seq = :room_seq")
    int findRoomUserByRoomSeqAndIs_inIsTrue(Long room_seq);
}
