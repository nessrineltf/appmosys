package com.example.demo.security.services;

import com.example.demo.model.*;

public interface AccountService {
    User savepatient(Patient patient);
    User saveadmin(Admin admin);
    User saveMedecin(Medecin medecin);
    Role save(Role role);
    User loadUserByUsername(String username);
    void addRoleToUser(String username, String rolename);
    //DossierMedical AjouterDossierMedToPatient(Patient patient);
}
