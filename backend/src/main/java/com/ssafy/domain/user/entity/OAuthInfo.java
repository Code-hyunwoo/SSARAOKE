package com.ssafy.domain.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Getter
@NoArgsConstructor
@Embeddable
public class OAuthInfo {

    //여러개 연동할 수 있나? 없나? 없으면 id 필요없는디 아닌가?
    @Column
    private String oAuthId;

    @Enumerated(EnumType.STRING)
    private OAuthType oAuthType;

    @Column
    private String access_token;

    @Column
    private String profile_path;


}
