package com.ssafy.api.auth.resolver;

import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.ssafy.common.exception.TokenNotFoundException;
import com.ssafy.common.exception.UserNotFoundException;
import com.ssafy.common.util.JwtTokenProvider;
import com.ssafy.domain.user.entity.User;
import com.ssafy.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.MethodParameter;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

@Slf4j
@RequiredArgsConstructor
@Component
public class AuthHandlerMethodArgumentResolver implements HandlerMethodArgumentResolver {

    private final UserRepository userRepository;

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        //annotation 있어야 함. 타입 맞아야 함. @Auth User user
        boolean hasAnnotation = parameter.getParameterAnnotation(Auth.class) != null;
        boolean isUser = parameter.getParameterType().equals(User.class);

        return hasAnnotation && isUser;
    }

    @Override
    public User resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        String token = webRequest.getHeader(JwtTokenProvider.HEADER_STRING);
        if(token != null){
            JWTVerifier verifier = JwtTokenProvider.getVerifier();
            JwtTokenProvider.handleError(token);
            DecodedJWT decodedJWT = verifier.verify(token.replace(JwtTokenProvider.TOKEN_PREFIX, ""));
            Long userid = Long.parseLong(decodedJWT.getSubject());
            log.error("token: " + token);
            log.error("id: " + userid);
            return userRepository.findById(userid)
                    .orElseThrow(UserNotFoundException::new);
        }else{
            throw new TokenNotFoundException();
        }
    }
}
