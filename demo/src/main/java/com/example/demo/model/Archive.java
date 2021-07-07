package com.example.demo.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
@Entity
public class Archive implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateArchivage;

    public Archive(Date dateArchivage) {
        this.dateArchivage = dateArchivage;
    }

    public Archive() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateArchivage() {
        return dateArchivage;
    }

    public void setDateArchivage(Date dateArchivage) {
        this.dateArchivage = dateArchivage;
    }
}
