package com.ssafy.domain.tag.repository;

import com.ssafy.domain.tag.entity.Tag;
import jdk.nashorn.internal.runtime.options.Option;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
    @Query("select t from Tag t where t.tag_name = :name")
    Tag findTagByTag_name(@Param("name") String name);
}
