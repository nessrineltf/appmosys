package com.example.demo.controllor;

import com.example.demo.model.*;
import com.example.demo.repository.MedecinRepository;
import com.example.demo.repository.RessourceMedicalRepository;
import com.example.demo.repository.SpecialiteRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/medecin")
public class MedecinControllor {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SpecialiteRepository specialiteRepository;
    @Autowired
    private MedecinRepository medecinRepository;
    @Autowired
    private AccountService accountService;
    private RessourceMedicalRepository ressourceRepository;
    @PostMapping("/add/{idc}")
    public User registermedecin(@PathVariable Long idc ,@RequestBody Medecin medecin ){
        Specialite specialite =specialiteRepository.getOne(idc);
        medecin.setSpecialite(specialite);
        return  accountService.saveMedecin(medecin);
    }

    @GetMapping("/all")
    public List<User> get_allmedecin() {
        List<User> med = new ArrayList<>();
        for(User utilisateur:userRepository.findAll())
            if(utilisateur.getClass()== Medecin.class )
                med.add(utilisateur);
        return  med;
    }
    @DeleteMapping("/delete/{id}")
    public HashMap deletemedecin(@PathVariable Long id) {
        HashMap<String,String> hashMap= new HashMap<>();
        try {
            medecinRepository.deleteById(id);
            hashMap.put("state","yes");
            return  hashMap;
        } catch (Exception e) {
            hashMap.put("state","no");
            return hashMap;
        }
    }
    @GetMapping("/byId/{idUser}")
    public Medecin findUserByIdUser(@PathVariable Long idUser) {

        return medecinRepository.getOne(idUser);
    }
    @PutMapping("edit/{id}")
    public Medecin modifier(@RequestBody Medecin medecin, @PathVariable Long id){
        medecin.setId(id);
        return medecinRepository.saveAndFlush(medecin);
    }
    @GetMapping("/users")
    public User getuser(Principal principal){
        return  userRepository.findByUsername(principal.getName());
    }

}
