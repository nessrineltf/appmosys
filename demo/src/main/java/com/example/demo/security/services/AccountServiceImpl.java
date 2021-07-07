package com.example.demo.security.services;

import com.example.demo.model.*;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AccountServiceImpl implements AccountService{

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    @Autowired
    PasswordEncoder encoder;

    public AccountServiceImpl(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public User savepatient(Patient patient) {
        User  user=userRepository.findByUsername(patient.getUsername());
        if(user!=null) throw new RuntimeException("User already exists");
        Patient appUser=new Patient();
        appUser.setUsername(patient.getUsername());
        appUser.setEmail(patient.getEmail());
        appUser.setPassword(encoder.encode(patient.getPassword()));
        appUser.setPhoto(patient.getPhoto());
        appUser.setSexe(patient.getSexe());
        appUser.setTelephone(patient.getTelephone());
        appUser.setFirst_name(patient.getFirst_name());
        appUser.setLast_name(patient.getLast_name());
        appUser.setAdresse(patient.getAdresse());
        appUser.setEtat(patient.getEtat());
        appUser.setMaladie(patient.getMaladie());
        appUser.setDateNaissance(patient.getDateNaissance());
        userRepository.save(appUser);
        addRoleToUser(patient.getUsername(),"Patient");
        return  appUser;
    }
    @Override
    public User saveadmin(Admin admin) {
        User  user=userRepository.findByUsername(admin.getUsername());
        if(user!=null) throw new RuntimeException("User already exists");
        Admin appUser=new Admin();
        appUser.setUsername(admin.getUsername());
        appUser.setEmail(admin.getEmail());
        appUser.setPassword(encoder.encode(admin.getPassword()));

        appUser.setFirst_name(admin.getFirst_name());
        appUser.setLast_name(admin.getLast_name());
        appUser.setPhoto(admin.getPhoto());
        userRepository.save(appUser);
        addRoleToUser(admin.getUsername(),"ADMIN");
        return  appUser;
    }
    @Override
    public User saveMedecin(Medecin medecin) {
        User  user=userRepository.findByUsername(medecin.getUsername());
        if(user!=null) throw new RuntimeException("User already exists");
        Medecin appUser=new Medecin();
        appUser.setPassword(encoder.encode(medecin.getPassword()));
        appUser.setUsername(medecin.getUsername());
        appUser.setFirst_name(medecin.getUsername());
        appUser.setLast_name(medecin.getLast_name());
        appUser.setAdresse(medecin.getAdresse());
        appUser.setTelephone(medecin.getTelephone());
        appUser.setHoraire(medecin.getHoraire());
        appUser.setSpecialite(medecin.getSpecialite());
        appUser.setSexe(medecin.getSexe());
        appUser.setPhoto(medecin.getPhoto());
        appUser.setDureeMoyenneRDV(medecin.getDureeMoyenneRDV());
        userRepository.save(appUser);
        addRoleToUser(medecin.getUsername(),"Medecin");
        return  appUser;
    }
    @Override
    public Role save(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public User loadUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public void addRoleToUser(String username, String name) {
        User appUser=userRepository.findByUsername(username);
        Role appRole=roleRepository.findByName(name);
        appUser.getRoles().add(appRole);
    }
//  public DossierMedical AjouterDossierMedToPatient(Patient patient){
//     User appUser= userRepository.findByUsername(patient.getUsername());
//
//      DossierMedical dossierMedical=new DossierMedical();
//      appUser.setDossierMedical(dossierMedical);
//       return dossierMedical;
//    }
}
