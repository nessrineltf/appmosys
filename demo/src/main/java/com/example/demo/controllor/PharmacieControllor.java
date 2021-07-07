package com.example.demo.controllor;

import com.example.demo.model.Pharmacie;
import com.example.demo.model.Ville;

import com.example.demo.repository.PharmacieRepository;
import com.example.demo.repository.VilleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/pharmacie/")
@CrossOrigin("*")
public class PharmacieControllor {

    @Autowired
    private PharmacieRepository pharmacieRepository;
    @Autowired
    private VilleRepository villeRepository;

    @PostMapping("add/{idv}")
    public Pharmacie ajout( @PathVariable Long idv,@RequestBody Pharmacie pharmacie){
        Ville ville = villeRepository.getOne(idv);
        pharmacie.setVille(ville);

        return pharmacieRepository.saveAndFlush(pharmacie);

    }
    @DeleteMapping("delete/{id}")
    public HashMap supprimer(@PathVariable Long id){
        HashMap<String,String> hashMap = new HashMap<>();
        try{
            pharmacieRepository.deleteById(id);
            hashMap.put("state","yes");
            return hashMap;
        }catch (Exception e){
            hashMap.put("state","no");
            return hashMap;
        }
    }
    @GetMapping("all")
    public List<Pharmacie> getall(){
        return pharmacieRepository.findAll();
    }

    @PutMapping("edit/{id}/{idv}")
    public Pharmacie modifier( @PathVariable Long id,@PathVariable Long idv,@RequestBody Pharmacie pharmacie){
        pharmacie.setId(id);
        Ville ville = villeRepository.getOne(idv);
        pharmacie.setVille(ville);
        return pharmacieRepository.saveAndFlush(pharmacie);


    }
}
