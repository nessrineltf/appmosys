package com.example.demo.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Hopitale implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String nomhopitale;
    private int tel_urgence;
    private int tel_secondaire;
    private String nomdirecteur;
    private String adresse;
    @ManyToOne
    private Ville ville;

    public Hopitale() {
    }

    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
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

    public String getNomhopitale() {
        return nomhopitale;
    }

    public void setNomhopitale(String nomhopitale) {
        this.nomhopitale = nomhopitale;
    }

    public String getNomdirecteur() {
        return nomdirecteur;
    }

    public void setNomdirecteur(String nomdirecteur) {
        this.nomdirecteur = nomdirecteur;
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
}
