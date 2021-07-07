package com.example.demo.repository;

import com.example.demo.model.RendezVous;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface RendezVousRepository extends JpaRepository<RendezVous,Long> {
}
