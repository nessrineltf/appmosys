package com.example.demo.controllor;

import com.example.demo.model.Specialite;

import com.example.demo.repository.SpecialiteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/specialite/")
@CrossOrigin("*")
public class SpecialiteControllor {
    @Autowired
    SpecialiteRepository specialiteRepository;
    @GetMapping("all")
    public List<Specialite> getall(){
        return specialiteRepository.findAll();
    }

    @PostMapping("add")
    public Specialite ajout(@RequestBody Specialite specialite){


        return specialiteRepository.saveAndFlush(specialite);

    }
    @PutMapping("edit/{id}")
    public Specialite modifier(@RequestBody Specialite specialite,@PathVariable Long id){
        specialite.setId(id);

        return specialiteRepository.saveAndFlush(specialite);


    }
    @DeleteMapping("delete/{id}")
    public HashMap supprimer(@PathVariable Long id){
        HashMap<String,String> hashMap = new HashMap<>();
        try{
            specialiteRepository.deleteById(id);
            hashMap.put("state","yes");
            return hashMap;
        }catch (Exception e){
            hashMap.put("state","no");
            return hashMap;
        }
    }
    @GetMapping("Byid/{id}")
    public Specialite getById(@PathVariable Long id){
        return specialiteRepository.getOne(id);
    }
}
