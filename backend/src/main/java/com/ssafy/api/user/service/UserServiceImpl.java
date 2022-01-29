package com.ssafy.api.user.service;

import com.ssafy.common.exception.UserNicknameExistException;
import com.ssafy.domain.user.entity.User;
import com.ssafy.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Transactional
    @Override
    public String updateUserNickname(User user, String nickname) {
        //nickname 중복인지 검사
        if(userRepository.existsByNickname(nickname)){
            throw new UserNicknameExistException();
        }
        user.updateNickname(nickname);
        return nickname;
    }

}
