package com.example.demo.controllor;

import com.example.demo.model.Ville;
import com.example.demo.model.Ville;
import com.example.demo.repository.VilleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/ville/")
@CrossOrigin("*")
public class VilleControllor {
    @Autowired
    VilleRepository villeRepository;
    @GetMapping("all")
    public List<Ville> getall(){
        return villeRepository.findAll();
    }

    @PostMapping("add")
    public Ville ajout(@RequestBody Ville ville){


        return villeRepository.saveAndFlush(ville);

    }
    @PutMapping("edit/{id}")
    public Ville modifier(@RequestBody Ville ville,@PathVariable Long id){
        ville.setId(id);

        return villeRepository.saveAndFlush(ville);


    }
    @DeleteMapping("delete/{id}")
    public HashMap supprimer(@PathVariable Long id){
        HashMap<String,String> hashMap = new HashMap<>();
        try{
            villeRepository.deleteById(id);
            hashMap.put("state","yes");
            return hashMap;
        }catch (Exception e){
            hashMap.put("state","no");
            return hashMap;
        }
    }
    @GetMapping("byid/{id}")
    public Ville getcat(@PathVariable Long id){
        return villeRepository.getOne(id);
    }
}
