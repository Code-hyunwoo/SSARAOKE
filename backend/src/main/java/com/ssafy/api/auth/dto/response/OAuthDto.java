package com.ssafy.api.auth.dto.response;

import com.ssafy.domain.user.entity.OAuthType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OAuthDto {
    private Long seq;
    private String token;
    private OAuthType oAuthType;
    private String nickname;
    boolean isNew;

}
