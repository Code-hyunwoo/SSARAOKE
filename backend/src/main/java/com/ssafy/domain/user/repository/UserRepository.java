package com.ssafy.domain.user.repository;

import com.ssafy.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;

/**
 * 유저 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> deleteByEmail(String email);
    //String으로 들어오는지 확인해봐야함
    @Query("select u from User u where u.oAuthInfo.oAuthSeq = :seq")
    Optional<User> findByOAuthSeq(@Param("seq") String oAuthSeq);

    boolean existsByNickname(String nickname);
}