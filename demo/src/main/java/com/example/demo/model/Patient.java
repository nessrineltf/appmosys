package com.example.demo.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.Email;
@DiscriminatorValue("Patient")
@Entity
public class Patient extends User{
    public Patient(String username, @Email String email, String password,String photo, String sexe ,int telephone, String first_name, String last_name, String adresse, String etat, String maladie, java.util.Date dateNaissance) {
        super(username, email, password, photo, sexe, telephone, first_name, last_name, adresse, etat, maladie, dateNaissance);
    }

    public Patient() {
    }
}
