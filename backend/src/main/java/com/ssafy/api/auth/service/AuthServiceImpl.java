package com.ssafy.api.auth.service;

import com.ssafy.api.auth.dto.request.AuthRequestDto;
import com.ssafy.api.auth.dto.response.OAuthDto;
import com.ssafy.common.oauth.KaKaoOAuthResponse;
import com.ssafy.common.oauth.OAuthClient;
import com.ssafy.common.util.JwtTokenProvider;
import com.ssafy.domain.user.entity.User;
import com.ssafy.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.security.InvalidParameterException;
import java.util.Objects;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final OAuthClient oAuthClient;

    //회원가입
    @Transactional
    @Override
    public OAuthDto signUp(AuthRequestDto requestDto) {
        //validation
        if(Objects.isNull(requestDto.getOAuthType())){
            throw new InvalidParameterException("OAuth type이 null로 요청됨");
        }
        //kakao접근해서 유저 프로필 끌어옴
        KaKaoOAuthResponse profile = oAuthClient.getInfo(requestDto.getAccessToken());    //kakao만 잡혀 있음
        Optional<User> existUser = userRepository.findByOAuthSeq(profile.getId());
        //로그인 로직
        //굳이 Optional객체 이렇게 써야하나 현타옴...
        if(existUser.isPresent()){
            String token = "Bearer " + JwtTokenProvider.getToken(existUser.get().getSeq());
            return new OAuthDto(existUser.get().getSeq(), token, requestDto.getOAuthType(), existUser.get().getNickname(), false);
        }
        //회원가입 로직
        else{
            User newUser = User.builder()
                    .email(profile.getOAuthEmail())
                    .nickname(profile.getOAuthNickname())
                    .oAuthSeq(profile.getId())
                    .oAuthType(requestDto.getOAuthType())
                    .build();
            User savedUser = userRepository.save(newUser);

            String token = "Bearer " + JwtTokenProvider.getToken(savedUser.getSeq());
            return new OAuthDto(savedUser.getSeq(), token, requestDto.getOAuthType(), existUser.get().getNickname(), true);
        }
    }

    @Transactional
    @Override
    public String refreshToken(User user) {
        return JwtTokenProvider.getToken(user.getSeq());
    }
}
