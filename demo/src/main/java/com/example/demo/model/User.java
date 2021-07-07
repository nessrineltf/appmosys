package com.example.demo.model;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import net.minidev.json.annotate.JsonIgnore;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="Utype")
public class User implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String username;
    @Email
    private String email;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    @CreationTimestamp
    private LocalDateTime createDatetime;
    private int telephone;
    private String first_name;
    private String last_name;
    private String adresse;
    private String etat;
    private String sexe;
    @UpdateTimestamp
    private LocalDateTime uDateTime;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();
    private String maladie;
    private Date dateNaissance;
    private int Horaire;
    private int dureeMoyenneRDV;
    private String diplome;
    private String photo;
    @ManyToOne
    private Specialite specialite;
    @ManyToOne
    private Contact contact;
    @OneToMany(mappedBy = "medecin")
    @JsonIgnore
    @JsonManagedReference
    private List<RessourceMatriel> ressourceMatrielList;
    @OneToOne
    private DossierMedical dossierMedical;
    @OneToMany(mappedBy = "medecincr",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIgnore
    @JsonManagedReference
    private List<Creneaurdv> creneaurdvmedecinList;

    public User(String first_name, String last_name,String username, String email, String password, String photo) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.photo=photo;
    }

    public User(String username, @Email String email, String password, String photo, String sexe, int telephone, String first_name, String last_name, String adresse, String etat,  String maladie, Date dateNaissance) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.sexe = sexe;
        this.telephone = telephone;
        this.first_name = first_name;
        this.last_name = last_name;
        this.adresse = adresse;
        this.etat = etat;
        this.photo=photo;
        this.maladie = maladie;
        this.dateNaissance = dateNaissance;
    }
    public User(String username, @Email String email, String password, String photo,  int Horaire, int dureeMoyenneRDV,
            String diplome, String sexe, int telephone, String first_name, String last_name, String adresse){
        this.username = username;
        this.email = email;
        this.password = password;
        this.sexe = sexe;
        this.telephone = telephone;
        this.first_name = first_name;
        this.last_name = last_name;
        this.adresse = adresse;
        this.Horaire=Horaire;
        this.diplome=diplome;
        this.dureeMoyenneRDV=dureeMoyenneRDV;
        this.photo=photo;
    }
    public User(){}
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDateTime getCreateDatetime() {
        return createDatetime;
    }

    public void setCreateDatetime(LocalDateTime createDatetime) {
        this.createDatetime = createDatetime;
    }

    public int getTelephone() {
        return telephone;
    }

    public void setTelephone(int telephone) {
        this.telephone = telephone;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getEtat() {
        return etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public String getSexe() {
        return sexe;
    }

    public void setSexe(String sexe) {
        this.sexe = sexe;
    }

    public LocalDateTime getuDateTime() {
        return uDateTime;
    }

    public void setuDateTime(LocalDateTime uDateTime) {
        this.uDateTime = uDateTime;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public String getMaladie() {
        return maladie;
    }

    public void setMaladie(String maladie) {
        this.maladie = maladie;
    }

    public Date getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(Date dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public int getHoraire() {
        return Horaire;
    }

    public void setHoraire(int horaire) {
        Horaire = horaire;
    }

    public int getDureeMoyenneRDV() {
        return dureeMoyenneRDV;
    }

    public void setDureeMoyenneRDV(int dureeMoyenneRDV) {
        this.dureeMoyenneRDV = dureeMoyenneRDV;
    }

    public String getDiplome() {
        return diplome;
    }

    public void setDiplome(String diplome) {
        this.diplome = diplome;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public Specialite getSpecialite() {
        return specialite;
    }

    public void setSpecialite(Specialite specialite) {
        this.specialite = specialite;
    }

    public Contact getContact() {
        return contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }


    public List<RessourceMatriel> getRessourceMatrielList() {
        return ressourceMatrielList;
    }

    public void setRessourceMatrielList(List<RessourceMatriel> ressourceMatrielList) {
        this.ressourceMatrielList = ressourceMatrielList;
    }

    public List<Creneaurdv> getCreneaurdvmedecinList() {
        return creneaurdvmedecinList;
    }

    public void setCreneaurdvmedecinList(List<Creneaurdv> creneaurdvmedecinList) {
        this.creneaurdvmedecinList = creneaurdvmedecinList;
    }

    public DossierMedical getDossierMedical() {
        return dossierMedical;
    }

    public void setDossierMedical(DossierMedical dossierMedical) {
        this.dossierMedical = dossierMedical;
    }
}
