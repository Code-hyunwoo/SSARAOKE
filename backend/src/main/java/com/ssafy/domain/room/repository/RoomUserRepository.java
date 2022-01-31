package com.ssafy.domain.room.repository;

import com.ssafy.domain.room.domain.RoomUser;
import com.ssafy.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomUserRepository extends JpaRepository<RoomUser, Long> {
    List<RoomUser> findByUser(User user);
}
