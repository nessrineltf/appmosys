package com.example.demo.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@DiscriminatorValue("Admin")
@Entity
public class Admin extends User{
    public Admin(String first_name, String last_name, String username, String email, String password,String photo) {
        super(first_name, last_name, username, email, password,photo);
    }
    public Admin(){
    }
}
