package com.example.demo.model;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Pharmacie implements Serializable {
//    public enum Type {
//        Jour,
//        Nuit,
//        Garde
//    }
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String nompharmacie;
    private String description;
    private String typepharmacie;
    private String adresse;
    private int telephone;
    @ManyToOne
    private Ville ville;

    public Pharmacie() {
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getNompharmacie() {
        return nompharmacie;
    }

    public void setNompharmacie(String nompharmacie) {
        this.nompharmacie = nompharmacie;
    }

    public String getTypepharmacie() {
        return typepharmacie;
    }

    public void setTypepharmacie(String typepharmacie) {
        this.typepharmacie = typepharmacie;
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
