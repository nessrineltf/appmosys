package com.example.demo.repository;

import com.example.demo.model.Radiologue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface RadiologueRepository extends JpaRepository<Radiologue,Long> {
}
