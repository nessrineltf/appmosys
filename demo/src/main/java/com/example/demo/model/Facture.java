package com.example.demo.model;

import javax.persistence.*;
import java.io.Serializable;
@Entity
public class Facture implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(unique = true)
    private int reference;
    @Column(nullable = false)
    private int quantite;
    @Column(nullable = false)
    private float prix_unite;
    private int fax;
    @Column(nullable = false)
    private int phone;
    @Column(nullable = false)
    private int TVA;

    public Facture() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getReference() {
        return reference;
    }

    public void setReference(int reference) {
        this.reference = reference;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    public float getPrix_unite() {
        return prix_unite;
    }

    public void setPrix_unite(float prix_unite) {
        this.prix_unite = prix_unite;
    }

    public int getFax() {
        return fax;
    }

    public void setFax(int fax) {
        this.fax = fax;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public int getTVA() {
        return TVA;
    }

    public void setTVA(int TVA) {
        this.TVA = TVA;
    }
}
