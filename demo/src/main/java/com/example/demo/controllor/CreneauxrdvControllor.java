package com.example.demo.controllor;

import com.example.demo.model.*;

import com.example.demo.repository.CreneauxrdvRepository;
import com.example.demo.repository.MedecinRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/crenauxrdv/")
@CrossOrigin("*")
public class CreneauxrdvControllor {
    @Autowired
    private CreneauxrdvRepository creneauxrdvRepository;
    @Autowired
    private MedecinRepository medecinRepository;
    @PostMapping("add/{id}")
    public Creneaurdv ajout(@RequestBody Creneaurdv rdvv, @PathVariable Long id){
        Medecin medecin= medecinRepository.getById(id);
        rdvv.setMedecin(medecin);
        return creneauxrdvRepository.saveAndFlush(rdvv);

    }
    @PutMapping("edit/{id}")
    public Creneaurdv modifier(@RequestBody Creneaurdv creneaurdv,@PathVariable Long id){
        creneaurdv.setId(id);

        return creneauxrdvRepository.saveAndFlush(creneaurdv);


    }
    @DeleteMapping("delete/{id}")
    public HashMap supprimer(@PathVariable Long id){
        HashMap<String,String> hashMap = new HashMap<>();
        try{
            creneauxrdvRepository.deleteById(id);
            hashMap.put("state","yes");
            return hashMap;
        }catch (Exception e){
            hashMap.put("state","no");
            return hashMap;
        }
    }
    @GetMapping("Byid/{id}")
    public Creneaurdv getById(@PathVariable Long id){
        return creneauxrdvRepository.getOne(id);
    }
    @GetMapping("all")
    public List<Creneaurdv> getall(){
        return creneauxrdvRepository.findAll();
    }

}
