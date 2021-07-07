package com.example.demo.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Email;

@DiscriminatorValue("Medecin")
@Entity
public class Medecin extends User {


    public Medecin(String username, @Email String email, String password, String photo,  int Horaire, int dureeMoyenneRDV,
                   String diplome, String sexe, int telephone, String first_name, String last_name, String adresse){
        super(username,email,password,photo,Horaire,dureeMoyenneRDV,diplome,sexe,telephone,first_name,last_name,adresse);
    }

    public Medecin() {
    }
}
