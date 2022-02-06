package com.ssafy.domain.reservation.repository;

import com.ssafy.domain.reservation.entity.Reservation;
import com.ssafy.domain.room.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    public void deleteAllByRoom_Seq(Long room_seq);
    @Query("select r from Reservation r where r.room.seq=:room_seq and r.song_no=:song_no")
    public void deleteAllByRoomAndSong_no(@Param("room_seq") Long room_seq, @Param("song_no") Long song_no);

}
