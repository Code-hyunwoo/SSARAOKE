package com.ssafy.api.user.service;

import com.ssafy.api.user.dto.request.UserUpdateRequest;
import com.ssafy.api.user.dto.response.UserResponse;
import com.ssafy.api.user.dto.response.UserUpdateResponse;
import com.ssafy.common.exception.CustomException;
import com.ssafy.common.exception.ErrorCode;
import com.ssafy.domain.bookmark.entity.Bookmark;
import com.ssafy.domain.user.entity.User;
import com.ssafy.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Transactional
    @Override
    public UserResponse getMyPage(User user) {
        List<Bookmark> list = user.getBookmarks();
        return new UserResponse(user.getNickname(), user.getEmail(), list);
    }

    @Transactional
    @Override
    public UserUpdateResponse updateUserNickname(User user, UserUpdateRequest request) {
        //nickname 중복인지 검사
        if(userRepository.existsByNickname(request.getNickname())){
            throw new CustomException(ErrorCode.DUPLICATE_NICKNAME);
//            throw new ResponseStatusException(HttpStatus.FOUND, "Nickname already Exist");
        }
        if(userRepository.existsByEmail(request.getEmail())){
            throw new CustomException(ErrorCode.DUPLICATE_EMAIL);
        }
        user.updateNicknameAndEmail(request.getNickname(), request.getEmail());
        return new UserUpdateResponse(user.getNickname(), user.getNickname());
    }

}
