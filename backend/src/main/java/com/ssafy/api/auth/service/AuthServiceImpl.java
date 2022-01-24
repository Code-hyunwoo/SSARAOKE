package com.ssafy.api.auth.service;


import com.ssafy.api.auth.dto.request.AuthCreationRequestDto;
import com.ssafy.api.auth.dto.request.AuthRequestDto;
import com.ssafy.api.auth.dto.response.OAuthDto;
import com.ssafy.common.oauth.KaKaoOAuthResponse;
import com.ssafy.common.oauth.OAuthClient;
import com.ssafy.common.util.JwtTokenProvider;
import com.ssafy.domain.user.entity.User;
import com.ssafy.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.security.InvalidParameterException;
import java.util.Objects;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final OAuthClient oAuthClient;

    //accessToken으로 유저 검증하고 id, token, "KAKAO" 돌려주기
    @Transactional
    @Override
    public OAuthDto authenticate(AuthRequestDto requestDto) {
        //validation
        if(Objects.isNull(requestDto.getOAuthType())){
            throw new InvalidParameterException("OAuth type이 null로 요청됨");
        }
        //kakao접근해서 user profile 끌어옴
        KaKaoOAuthResponse profile = oAuthClient.getInfo(requestDto.getAccessToken());    //kakao만 잡혀 있음


        User user = userRepository.findByOAuthSeq(profile.getId())
                .orElseThrow(()->new IllegalArgumentException("유효하지 않음"));
        String token = JwtTokenProvider.getToken(user.getSeq());

        return new OAuthDto(user.getSeq(), token, requestDto.getOAuthType());
    }

    //회원가임
    @Transactional
    @Override
    public OAuthDto signUp(AuthCreationRequestDto requestDto) {
        //validation
        if(Objects.isNull(requestDto.getOAuthType())){
            throw new InvalidParameterException("OAuth type이 null로 요청됨");
        }
        //kakao접근해서 유저 프로필 끌어옴
        KaKaoOAuthResponse profile = oAuthClient.getInfo(requestDto.getAccessToken());    //kakao만 잡혀 있음

//        OAuthResponse profile = authenticationManager
//                .requestOAuthUserInfo(requestDto.getOAuthType(), requestDto.getAccessToken());
        Optional<User> existUser = userRepository.findByOAuthSeq(profile.getId());
        //굳이 Optional객체 이렇게 써야하나 현타옴...
        if(existUser.isPresent()){
            throw new IllegalArgumentException("이미 등록된 회원입니다.");
        }
        User newUser = User.builder()
                .email(profile.getEmail())
                .nickname(profile.getOAuthNickname())
                .oAuthSeq(profile.getId())
                .oAuthType(requestDto.getOAuthType())
                .profilePath(profile.getOAuthProfilePath())
                .build();
        User savedUser = userRepository.save(newUser);
        String token = JwtTokenProvider.getToken(savedUser.getSeq());
        return new OAuthDto(savedUser.getSeq(), token, requestDto.getOAuthType());
    }

    @Transactional
    @Override
    public String refreshToken(User user) {
        return JwtTokenProvider.getToken(user.getSeq());
    }
}
