package com.ssafy.domain.bookmark.repository;

import com.ssafy.domain.bookmark.entity.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
//    @Transactional
//    @Modifying
//    @Query("delete from Bookmark b where b.user.seq = :user_seq and b.title = :title")
//    public void deleteByUserAndBookmark(@Param("user_seq")Long user_seq, @Param("title")String title);
}
