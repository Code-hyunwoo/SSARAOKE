package com.ssafy.common.oauth;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;

import static org.junit.jupiter.api.Assertions.*;

class OAuthClientTest {

    private final HttpHeaders headers = new HttpHeaders();

    @Test
    public void bearerAuth() {
        String token = "testtoken";
        headers.setBearerAuth(token);
        String authorization = headers.getFirst(HttpHeaders.AUTHORIZATION);
        assertEquals("Bearer testtoken", authorization);
    }
}