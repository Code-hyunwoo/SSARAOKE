package com.ssafy.domain.custom.repository;

import com.ssafy.domain.custom.entity.Custom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomRepository extends JpaRepository<Custom, Long> {
}
