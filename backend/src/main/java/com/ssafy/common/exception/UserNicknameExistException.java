package com.ssafy.common.exception;

public class UserNicknameExistException extends RuntimeException{
    public UserNicknameExistException() {
        super("이미 존재하는 닉네임입니다.");
    }
}
