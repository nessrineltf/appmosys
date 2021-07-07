package com.example.demo.controllor;

import com.example.demo.model.ParaPharmacie;
import com.example.demo.model.Pharmacie;
import com.example.demo.model.Ville;

import com.example.demo.repository.ParaPharmacieRepository;
import com.example.demo.repository.VilleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
@RestController
@RequestMapping("/api/parapharmacie/")
@CrossOrigin("*")
public class ParaPharmacieControllor {
    @Autowired
    private ParaPharmacieRepository paraPharmacieRepository;
    @Autowired
    private VilleRepository villeRepository;

    @PostMapping("add/{id}")
    public ParaPharmacie ajout( @PathVariable Long id,@RequestBody ParaPharmacie paraPharmacie){
        Ville ville = villeRepository.getOne(id);
        paraPharmacie.setVille(ville);

        return paraPharmacieRepository.saveAndFlush(paraPharmacie);

    }
    @DeleteMapping("delete/{id}")
    public HashMap supprimer(@PathVariable Long id){
        HashMap<String,String> hashMap = new HashMap<>();
        try{
            paraPharmacieRepository.deleteById(id);
            hashMap.put("state","yes");
            return hashMap;
        }catch (Exception e){
            hashMap.put("state","no");
            return hashMap;
        }
    }
    @GetMapping("all")
    public List<ParaPharmacie> getall(){
        return paraPharmacieRepository.findAll();
    }

    @PutMapping("edit/{id}")
    public ParaPharmacie modifier( @PathVariable Long id, @PathVariable Long idv,@RequestBody ParaPharmacie para){
        para.setId(id);
        Ville ville = villeRepository.getOne(idv);
        para.setVille(ville);
        return paraPharmacieRepository.saveAndFlush(para);


    }
}
