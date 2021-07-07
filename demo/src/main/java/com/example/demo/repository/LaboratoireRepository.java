package com.example.demo.repository;

import com.example.demo.model.Laboratoire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface LaboratoireRepository extends JpaRepository<Laboratoire,Long> {
}
