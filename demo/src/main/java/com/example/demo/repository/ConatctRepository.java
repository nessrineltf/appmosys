package com.example.demo.repository;

import com.example.demo.model.Contact;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ConatctRepository extends JpaRepository<Contact,Long> {
}
