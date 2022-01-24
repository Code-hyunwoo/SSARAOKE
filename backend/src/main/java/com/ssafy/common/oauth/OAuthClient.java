package com.ssafy.common.oauth;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Slf4j
@RequiredArgsConstructor
@Component
public class OAuthClient {
    private final WebClient webClient;

    public KaKaoOAuthResponse getInfo(String accessToken){
        return webClient.post()
                .uri("https://kapi.kakao.com/v2/user/me?secure_resource=false")
//                .headers(h-> h.setBearerAuth(accessToken))
//                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .header(HttpHeaders.AUTHORIZATION, "Bearer "+ accessToken)
                .retrieve()
                .onStatus(HttpStatus::is4xxClientError, clientResponse -> Mono.error(new IllegalArgumentException("액세스토큰실패")))
                .onStatus(HttpStatus::is5xxServerError, clientResponse -> Mono.error(new IllegalArgumentException("로그인중실패")))
                .bodyToMono(KaKaoOAuthResponse.class)
                .block();
    }


}
