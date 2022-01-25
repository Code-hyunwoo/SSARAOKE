package com.ssafy.common.oauth;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class KaKaoOAuthResponse{
    private String id;
    private LocalDateTime connected_at;
    private Properties properties;
    private KakaoAccount kakao_account;

    public KaKaoOAuthResponse(String id, LocalDateTime connectedAt, Properties properties, KakaoAccount account){
        this.id = id;
        this.connected_at = connectedAt;
        this.properties = properties;
        this.kakao_account = account;
    }



    public String getOAuthNickname(){
        return this.properties.getNickname();
    }
    public String getOAuthProfilePath(){
        return this.kakao_account.getProfile().getProfile_image_url();
    }
    public String getOAuthEmail(){return this.kakao_account.getEmail();}

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
        private Profile profile;
        private String email;
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
