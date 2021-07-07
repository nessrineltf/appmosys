package com.example.demo.controllor;

import com.example.demo.model.Clinique;
import com.example.demo.model.Hopitale;
import com.example.demo.model.ParaPharmacie;
import com.example.demo.model.Ville;
import com.example.demo.repository.CliniqueRepository;
import com.example.demo.repository.HopitaleRepository;
import com.example.demo.repository.VilleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
@RestController
@RequestMapping("/api/hopitale/")
@CrossOrigin("*")
public class HopitaleControllor {
    @Autowired
    private HopitaleRepository hopitaleRepository;
    @Autowired
    private VilleRepository villeRepository;

    @PostMapping("add/{id}")
    public Hopitale ajout(@PathVariable Long id,@RequestBody Hopitale hopitale){
        Ville ville = villeRepository.getOne(id);
        hopitale.setVille(ville);

        return hopitaleRepository.saveAndFlush(hopitale);

    }
    @DeleteMapping("delete/{id}")
    public HashMap supprimer(@PathVariable Long id){
        HashMap<String,String> hashMap = new HashMap<>();
        try{
            hopitaleRepository.deleteById(id);
            hashMap.put("state","yes");
            return hashMap;
        }catch (Exception e){
            hashMap.put("state","no");
            return hashMap;
        }
    }
    @GetMapping("all")
    public List<Hopitale> getall(){
        return hopitaleRepository.findAll();
    }
    @PutMapping("edit/{id}")
    public Hopitale modifier(@PathVariable Long id,@PathVariable Long idv,@RequestBody Hopitale hopitale){
        hopitale.setId(id);
        Ville ville = villeRepository.getOne(id);
        hopitale.setVille(ville);
        return hopitaleRepository.saveAndFlush(hopitale);


    }

}
