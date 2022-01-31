package com.ssafy.common.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_ACCEPTABLE, reason = "Nickname already Exist")
public class UserNicknameExistException extends RuntimeException{
}
