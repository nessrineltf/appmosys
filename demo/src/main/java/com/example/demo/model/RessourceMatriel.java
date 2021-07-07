package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class RessourceMatriel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom_produit;
    private int quantitéEtree;
    private int quantitéSortie;
    @ManyToOne
    @JsonManagedReference
    private Medecin medecin;
    public RessourceMatriel(int quantitéEtree, int quantitéSortie , String nom_produit) {
        this.quantitéEtree = quantitéEtree;
        this.quantitéSortie = quantitéSortie;
        this.nom_produit= nom_produit;
    }

    public RessourceMatriel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantitéEtree() {
        return quantitéEtree;
    }

    public void setQuantitéEtree(int quantitéEtree) {
        this.quantitéEtree = quantitéEtree;
    }

    public int getQuantitéSortie() {
        return quantitéSortie;
    }

    public void setQuantitéSortie(int quantitéSortie) {
        this.quantitéSortie = quantitéSortie;
    }

    public String getNom_produit() {
        return nom_produit;
    }

    public void setNom_produit(String nom_produit) {
        this.nom_produit = nom_produit;
    }

    public Medecin getMedecin() {
        return medecin;
    }

    public void setMedecin(Medecin medecin) {
        this.medecin = medecin;
    }
}
