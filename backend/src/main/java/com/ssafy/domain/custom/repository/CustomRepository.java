package com.ssafy.domain.custom.repository;

import com.ssafy.domain.custom.domain.Custom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomRepository extends JpaRepository<Custom, Long> {
}
