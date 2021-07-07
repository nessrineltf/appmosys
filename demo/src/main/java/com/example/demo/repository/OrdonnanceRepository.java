package com.example.demo.repository;

import com.example.demo.model.Ordonnance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface OrdonnanceRepository extends JpaRepository<Ordonnance,Long> {
}
