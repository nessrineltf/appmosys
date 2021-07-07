package com.example.demo.model;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;


@Entity
public class DossierMedical implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "idDm", unique = true, nullable = false)
    private Long id;

    @Column(unique = true, nullable = false)
    private Long numDossier;
    @Column(unique = true)
    private Long N_cnss;
    private String groupe_sangine;
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date date_Admission;

    private String relation;

    @OneToOne(mappedBy = "dossierMedical")
    private User appUserPatient;
    public DossierMedical() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getNumDossier() {
        return numDossier;
    }

    public void setNumDossier(Long numDossier) {
        this.numDossier = numDossier;
    }

    public Long getN_cnss() {
        return N_cnss;
    }

    public void setN_cnss(Long n_cnss) {
        N_cnss = n_cnss;
    }

    public String getGroupe_sangine() {
        return groupe_sangine;
    }

    public void setGroupe_sangine(String groupe_sangine) {
        this.groupe_sangine = groupe_sangine;
    }

    public Date getDate_Admission() {
        return date_Admission;
    }

    public void setDate_Admission(Date date_Admission) {
        this.date_Admission = date_Admission;
    }


    public String getRelation() {
        return relation;
    }

    public void setRelation(String relation) {
        this.relation = relation;
    }

    public User getAppUserPatient() {
        return appUserPatient;
    }

    public void setAppUserPatient(User appUserPatient) {
        this.appUserPatient = appUserPatient;
    }
}
