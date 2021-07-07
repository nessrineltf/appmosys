package com.example.demo.controllor;

import com.example.demo.model.Medecin;
import com.example.demo.model.RessourceMatriel;
import com.example.demo.model.Specialite;
import com.example.demo.model.User;
import com.example.demo.repository.MedecinRepository;
import com.example.demo.repository.RessourceMedicalRepository;
import com.example.demo.repository.SpecialiteRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/ressourcemateriel/")
@CrossOrigin("*")
public class RessourceMaterielControllor {
    @Autowired
    RessourceMedicalRepository ressourceMedicalRepository;
    @Autowired
    MedecinRepository medecinRepository;
    @GetMapping("all")
    public List<RessourceMatriel> getall(){
        return ressourceMedicalRepository.findAll();
    }

    @PostMapping("add/{id}")
    public RessourceMatriel ajout(@RequestBody RessourceMatriel ressourceMatriel,@PathVariable Long id){
        Medecin medecin= medecinRepository.getOne(id);
        ressourceMatriel.setMedecin(medecin);

        return ressourceMedicalRepository.saveAndFlush(ressourceMatriel);

    }
    @PutMapping("edit/{id}")
    public RessourceMatriel modifier(@RequestBody RessourceMatriel ressourceMatriel,@PathVariable Long id){
        ressourceMatriel.setId(id);

        return ressourceMedicalRepository.saveAndFlush(ressourceMatriel);


    }
    @DeleteMapping("delete/{id}")
    public HashMap supprimer(@PathVariable Long id){
        HashMap<String,String> hashMap = new HashMap<>();
        try{
            ressourceMedicalRepository.deleteById(id);
            hashMap.put("state","yes");
            return hashMap;
        }catch (Exception e){
            hashMap.put("state","no");
            return hashMap;
        }
    }
    @GetMapping("Byid/{id}")
    public RessourceMatriel getById(@PathVariable Long id){
        return ressourceMedicalRepository.getOne(id);
    }
}
