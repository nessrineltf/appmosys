package com.example.demo.model;

import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Specialite {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String nom_specialite;
    @OneToMany(mappedBy = "specialite", cascade=CascadeType.ALL)
    @JsonIgnore
    private List<Medecin> reclamationList;
    public Specialite() {
    }

    public Specialite(String nom_specialite) {
        this.nom_specialite = nom_specialite;
    }

    public Long getId() {
        return id;
    }

    public String getNom_specialite() {
        return nom_specialite;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setNom_specialite(String nom_specialite) {
        this.nom_specialite = nom_specialite;
    }
}
