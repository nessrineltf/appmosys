package com.example.demo.repository;

import com.example.demo.model.Hopitale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface HopitaleRepository extends JpaRepository<Hopitale,Long> {
}
