package com.example.demo.model;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Ordonnance implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(unique = true)
    private Long numero;
    private String libelle;
    private String details;
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;
    private int dose_prise;
    private int dose_jr;
    private Boolean chaque_jr;
    private int duree_jr;
    private String note;

    public Ordonnance() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getNumero() {
        return numero;
    }

    public void setNumero(Long numero) {
        this.numero = numero;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getDose_prise() {
        return dose_prise;
    }

    public void setDose_prise(int dose_prise) {
        this.dose_prise = dose_prise;
    }

    public int getDose_jr() {
        return dose_jr;
    }

    public void setDose_jr(int dose_jr) {
        this.dose_jr = dose_jr;
    }

    public Boolean getChaque_jr() {
        return chaque_jr;
    }

    public void setChaque_jr(Boolean chaque_jr) {
        this.chaque_jr = chaque_jr;
    }

    public int getDuree_jr() {
        return duree_jr;
    }

    public void setDuree_jr(int duree_jr) {
        this.duree_jr = duree_jr;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
