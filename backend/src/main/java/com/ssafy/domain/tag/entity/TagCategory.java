package com.ssafy.domain.tag.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@AllArgsConstructor
public enum TagCategory {
    YEAR("년도"),
    GENRE("장르"),
    COUNTRY("국가")
    ;
    private String value;

}
