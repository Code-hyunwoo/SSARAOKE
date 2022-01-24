package com.ssafy.api.auth.dto.request;

import com.ssafy.domain.user.entity.OAuthType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AuthRequestDto {
    private OAuthType oAuthType;
    private String accessToken;
}
