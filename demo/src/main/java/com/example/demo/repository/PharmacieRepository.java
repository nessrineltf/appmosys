package com.example.demo.repository;

import com.example.demo.model.Pharmacie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PharmacieRepository extends JpaRepository<Pharmacie,Long> {
}
