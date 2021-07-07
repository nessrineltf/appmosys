package com.example.demo.controllor;

import com.example.demo.model.Laboratoire;
import com.example.demo.model.ParaPharmacie;
import com.example.demo.model.Radiologue;
import com.example.demo.model.Ville;

import com.example.demo.repository.RadiologueRepository;
import com.example.demo.repository.VilleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
@RestController
@RequestMapping("/api/radiologue/")
@CrossOrigin("*")
public class RadiologueConrollor {

    @Autowired
    private RadiologueRepository radiologueRepository;
    @Autowired
    private VilleRepository villeRepository;

    @PostMapping("add/{id}")
    public Radiologue ajout(@RequestBody Radiologue radiologue, @PathVariable Long id){
        Ville ville = villeRepository.getOne(id);
        radiologue.setVille(ville);

        return radiologueRepository.saveAndFlush(radiologue);

    }
    @DeleteMapping("delete/{id}")
    public HashMap supprimer(@PathVariable Long id){
        HashMap<String,String> hashMap = new HashMap<>();
        try{
            radiologueRepository.deleteById(id);
            hashMap.put("state","yes");
            return hashMap;
        }catch (Exception e){
            hashMap.put("state","no");
            return hashMap;
        }
    }
    @GetMapping("all")
    public List<Radiologue> getall(){
        return radiologueRepository.findAll();
    }
    @PutMapping("edit/{id}")
    public Radiologue modifier(@RequestBody Radiologue rad, @PathVariable Long id){
        rad.setId(id);
        return radiologueRepository.saveAndFlush(rad);
    }
}
