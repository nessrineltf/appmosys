package com.example.demo.repository;

import com.example.demo.model.RessourceMatriel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface RessourceMedicalRepository extends JpaRepository<RessourceMatriel, Long> {
}
