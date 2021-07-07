package com.example.demo.controllor;

import com.example.demo.model.Clinique;
import com.example.demo.model.Ville;
import com.example.demo.repository.CliniqueRepository;
import com.example.demo.repository.VilleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
@RestController
@RequestMapping("/api/clinique/")
@CrossOrigin("*")
public class CliniqueControllor {

    @Autowired
    private CliniqueRepository cliniqueRepository;
    @Autowired
    private VilleRepository villeRepository;

    @PostMapping("add/{id}")
    public Clinique ajout(@RequestBody Clinique clinique, @PathVariable Long id){
        Ville ville = villeRepository.getOne(id);
        clinique.setVille(ville);

        return cliniqueRepository.saveAndFlush(clinique);

    }
    @DeleteMapping("delete/{id}")
    public HashMap supprimer(@PathVariable Long id){
        HashMap<String,String> hashMap = new HashMap<>();
        try{
            cliniqueRepository.deleteById(id);
            hashMap.put("state","yes");
            return hashMap;
        }catch (Exception e){
            hashMap.put("state","no");
            return hashMap;
        }
    }
    @GetMapping("all")
    public List<Clinique> getall(){
        return cliniqueRepository.findAll();
    }
}
