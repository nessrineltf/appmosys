package com.example.demo.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class Ville implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String nom;
    private String Longtitude;
    private String Latitude;

    @OneToMany(mappedBy = "ville", cascade=CascadeType.ALL)
    @JsonBackReference(value="laboratoireList")
    @JsonIgnore
    private List<Laboratoire> laboratoireList;
    @OneToMany(mappedBy = "ville", cascade=CascadeType.ALL)
    @JsonBackReference(value="cliniqueList")
    @JsonIgnore
    private List<Clinique> cliniqueList;
    @OneToMany(mappedBy = "ville", cascade=CascadeType.ALL)
    @JsonBackReference(value="hopitaleList")
    @JsonIgnore
    private List<Hopitale> hopitaleList;
    @OneToMany(mappedBy = "ville", cascade=CascadeType.ALL)
    @JsonIgnore
    @JsonBackReference(value="pharmacieList")
    private List<Pharmacie> pharmacieList;
    @OneToMany(mappedBy = "ville", cascade=CascadeType.ALL)
    @JsonBackReference(value="radiologueList")
    @JsonIgnore
    private List<Radiologue> radiologueList;
    @OneToMany(mappedBy = "ville", cascade=CascadeType.ALL)
    @JsonIgnore
    @JsonBackReference(value="paraPharmacieList")
    private List<ParaPharmacie> paraPharmacieList;
    public Ville() {
    }

    public List<Radiologue> getRadiologueList() {
        return radiologueList;
    }

    public void setRadiologueList(List<Radiologue> radiologueList) {
        this.radiologueList = radiologueList;
    }

    public List<Laboratoire> getLaboratoireList() {
        return laboratoireList;
    }

    public void setLaboratoireList(List<Laboratoire> laboratoireList) {
        this.laboratoireList = laboratoireList;
    }

    public List<Clinique> getCliniqueList() {
        return cliniqueList;
    }

    public void setCliniqueList(List<Clinique> cliniqueList) {
        this.cliniqueList = cliniqueList;
    }

    public List<Hopitale> getHopitaleList() {
        return hopitaleList;
    }

    public void setHopitaleList(List<Hopitale> hopitaleList) {
        this.hopitaleList = hopitaleList;
    }

    public List<Pharmacie> getPharmacieList() {
        return pharmacieList;
    }

    public void setPharmacieList(List<Pharmacie> pharmacieList) {
        this.pharmacieList = pharmacieList;
    }

    public List<ParaPharmacie> getParaPharmacieList() {
        return paraPharmacieList;
    }

    public void setParaPharmacieList(List<ParaPharmacie> paraPharmacieList) {
        this.paraPharmacieList = paraPharmacieList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getLongtitude() {
        return Longtitude;
    }

    public void setLongtitude(String longtitude) {
        Longtitude = longtitude;
    }

    public String getLatitude() {
        return Latitude;
    }

    public void setLatitude(String latitude) {
        Latitude = latitude;
    }
}
