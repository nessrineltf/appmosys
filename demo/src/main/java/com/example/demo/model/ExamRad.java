package com.example.demo.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class ExamRad implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(unique = true)
    private Long numero;
    private String libelle;
    private String contenu;
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date demande_le;
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date a_rdv_le;
    private String donner_par;
    private String statut;
    private String test_medical;
    private String resultat;

    public ExamRad() {
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

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public Date getDemande_le() {
        return demande_le;
    }

    public void setDemande_le(Date demande_le) {
        this.demande_le = demande_le;
    }

    public Date getA_rdv_le() {
        return a_rdv_le;
    }

    public void setA_rdv_le(Date a_rdv_le) {
        this.a_rdv_le = a_rdv_le;
    }

    public String getDonner_par() {
        return donner_par;
    }

    public void setDonner_par(String donner_par) {
        this.donner_par = donner_par;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public String getTest_medical() {
        return test_medical;
    }

    public void setTest_medical(String test_medical) {
        this.test_medical = test_medical;
    }

    public String getResultat() {
        return resultat;
    }

    public void setResultat(String resultat) {
        this.resultat = resultat;
    }
}
