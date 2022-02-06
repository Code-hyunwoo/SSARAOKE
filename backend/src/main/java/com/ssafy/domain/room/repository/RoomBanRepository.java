package com.ssafy.domain.room.repository;

import com.ssafy.domain.room.entity.RoomBan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomBanRepository extends JpaRepository<RoomBan, Long> {
    public List<RoomBan> findRoomBanByUserSeq(Long user_seq);
    public void deleteAllByRoom_Seq(Long room_seq);
}
