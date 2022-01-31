package com.ssafy.api.user.service;

import com.ssafy.api.user.dto.request.UserUpdateRequest;
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

    @Transactional
    @Test
    void updateNickname(){
        User user = User.builder().nickname("first").oAuthSeq("123").email("eee@gmail.com").profilePath("somewhere").build();
        User createdUser = userRepository.save(user);

        String newNickname = "changedEmail";
        String newEmail = "changedEmail";
        UserUpdateRequest request = new UserUpdateRequest(newNickname, newEmail);
        userService.updateUserNickname(createdUser, request);

        User modifiedUser = userRepository.findById(createdUser.getSeq()).get();
        assertEquals(newNickname, modifiedUser.getNickname());
    }

    @Transactional
    @Test
    void quitUser(){
        User user = User.builder().nickname("test").oAuthSeq("123").email("test@gmail.com").profilePath("somewhere").build();
        User newUser = userRepository.save(user);
        userService.quit(newUser.getSeq());
        assertEquals(false, userRepository.existsByEmail("test@gmail.com"));
    }
}
