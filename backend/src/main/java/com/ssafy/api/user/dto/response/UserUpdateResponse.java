package com.ssafy.api.user.dto.response;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserUpdateResponse {
    private String nickname;
    private String email;

}
