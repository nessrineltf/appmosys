package com.example.demo.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Clinique implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String nomClinique;
    private int tel_urgence;
    private int tel_secondaire;
    private String nomDirecteur;
    private String adresse;
    private int telephone;
    @ManyToOne
    private Ville ville;

    public Clinique() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomClinique() {
        return nomClinique;
    }

    public void setNomClinique(String nomClinique) {
        this.nomClinique = nomClinique;
    }

    public int getTel_urgence() {
        return tel_urgence;
    }

    public void setTel_urgence(int tel_urgence) {
        this.tel_urgence = tel_urgence;
    }

    public int getTel_secondaire() {
        return tel_secondaire;
    }

    public void setTel_secondaire(int tel_secondaire) {
        this.tel_secondaire = tel_secondaire;
    }

    public String getNomDirecteur() {
        return nomDirecteur;
    }

    public void setNomDirecteur(String nomDirecteur) {
        this.nomDirecteur = nomDirecteur;
    }

    public Ville getVille() {
        return ville;
    }

    public void setVille(Ville ville) {
        this.ville = ville;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public int getTelephone() {
        return telephone;
    }

    public void setTelephone(int telephone) {
        this.telephone = telephone;
    }
}
