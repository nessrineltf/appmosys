package com.example.demo.repository;

import com.example.demo.model.SalledAttente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface SalleDAttenteRepository extends JpaRepository<SalledAttente,Long> {
}
