package com.example.demo.repository;

import com.example.demo.model.Ville;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface VilleRepository extends JpaRepository<Ville,Long> {
    Ville findByNom(String nom);

    @Override
    Optional<Ville> findById(Long aLong);
}
