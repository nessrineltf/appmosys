package com.example.demo.repository;

import com.example.demo.model.DossierMedical;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UserRepository extends JpaRepository<User, Long> {
    public User findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
    //public User findByDossierMedicale(DossierMedical dossierMedical);
}
