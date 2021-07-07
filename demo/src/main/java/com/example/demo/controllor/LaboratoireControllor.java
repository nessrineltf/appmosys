package com.example.demo.controllor;

import com.example.demo.model.Hopitale;
import com.example.demo.model.Laboratoire;
import com.example.demo.model.ParaPharmacie;
import com.example.demo.model.Ville;
import com.example.demo.repository.HopitaleRepository;
import com.example.demo.repository.LaboratoireRepository;
import com.example.demo.repository.VilleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
@RestController
@RequestMapping("/api/laboratoire/")
@CrossOrigin("*")
public class LaboratoireControllor {
    @Autowired
    private LaboratoireRepository laboratoireRepository;
    @Autowired
    private VilleRepository villeRepository;

    @PostMapping("add/{id}")
    public Laboratoire ajout(@RequestBody Laboratoire laboratoire, @PathVariable Long id){
        Ville ville = villeRepository.getOne(id);
        laboratoire.setVille(ville);

        return laboratoireRepository.saveAndFlush(laboratoire);

    }
    @DeleteMapping("delete/{id}")
    public HashMap supprimer(@PathVariable Long id){
        HashMap<String,String> hashMap = new HashMap<>();
        try{
            laboratoireRepository.deleteById(id);
            hashMap.put("state","yes");
            return hashMap;
        }catch (Exception e){
            hashMap.put("state","no");
            return hashMap;
        }
    }
    @GetMapping("all")
    public List<Laboratoire> getall(){
        return laboratoireRepository.findAll();
    }

    @PutMapping("edit/{id}")
    public Laboratoire modifier(@RequestBody Laboratoire lab, @PathVariable Long id){
        lab.setId(id);

        return laboratoireRepository.saveAndFlush(lab);


    }
}
