package com.example.demo.repository;


import com.example.demo.model.Archive;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ArchiveRepository extends JpaRepository<Archive,Long> {
}
