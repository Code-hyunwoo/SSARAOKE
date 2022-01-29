package com.ssafy.api.user.service;

import com.ssafy.domain.user.entity.User;
import com.ssafy.domain.user.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class UserServiceTest {
    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;

    @Test
    void updateNickname(){
        User user = User.builder().nickname("first").oAuthSeq("123").email("eee@gmail.com").profilePath("somewhere").build();
        User createdUser = userRepository.save(user);

        String newNickname = "changed";
        userService.updateUserNickname(createdUser, newNickname);

        User modifiedUser = userRepository.findById(createdUser.getSeq()).get();
        assertEquals(newNickname, modifiedUser.getNickname());
    }
}
