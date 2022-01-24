package com.ssafy.common.oauth;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class KaKaoOAuthResponse{
    private String id;
    private LocalDateTime connectedAt;
    private Properties properties;
    private KakaoAccount kakaoAccount;
    private String email;

    public KaKaoOAuthResponse(String id, LocalDateTime connectedAt, Properties properties, KakaoAccount account, String email){
        this.id = id;
        this.connectedAt = connectedAt;
        this.properties = properties;
        this.kakaoAccount = account;
        this.email = email;
    }

    public KaKaoOAuthResponse of(String socialId, LocalDateTime connectedAt, String nickname, String thumbnail_image_url, String profile_image_url, String email) {
        return new KaKaoOAuthResponse(socialId, connectedAt,
                new Properties(nickname),
                new KakaoAccount(true, new Profile(nickname, thumbnail_image_url, profile_image_url)),
                email);
    }

    public String getOAuthNickname(){
        return this.properties.getNickname();
    }
    public String getOAuthProfilePath(){
        return this.kakaoAccount.getProfile().getProfile_image_url();
    }

    //https://developers.kakao.com/tool/rest-api/open/get/v2-user-me 참고
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    private static class Properties {
        private String nickname;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    private static class KakaoAccount {
        private boolean profileNeedsAgreement;
        private Profile profile;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    private static class Profile {
        private String nickname;
        private String thumbnail_image_url;
        private String profile_image_url;
    }
}
