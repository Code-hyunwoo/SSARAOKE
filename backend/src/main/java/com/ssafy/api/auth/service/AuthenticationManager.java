package com.ssafy.api.auth.service;

import com.ssafy.common.oauth.KaKaoOAuthResponse;
import com.ssafy.common.oauth.OAuthClient;
import com.ssafy.domain.user.entity.OAuthType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.security.InvalidParameterException;
import java.util.Objects;

@Component
@RequiredArgsConstructor
public class AuthenticationManager {

    private final OAuthClient oAuthClient;

    public KaKaoOAuthResponse requestOAuthUserInfo(OAuthType oAuthType, String accessToken){
        if(Objects.isNull(oAuthType)){
            throw new InvalidParameterException("OAuth type이 null로 요청됨");
        }
        return oAuthClient.getInfo(accessToken);    //kakao만 잡혀 있음
    }

}
