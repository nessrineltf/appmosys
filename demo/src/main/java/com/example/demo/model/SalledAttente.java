package com.example.demo.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class SalledAttente implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date arrive_a;
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date cons_a;

    public SalledAttente() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getArrive_a() {
        return arrive_a;
    }

    public void setArrive_a(Date arrive_a) {
        this.arrive_a = arrive_a;
    }

    public Date getCons_a() {
        return cons_a;
    }

    public void setCons_a(Date cons_a) {
        this.cons_a = cons_a;
    }
}

