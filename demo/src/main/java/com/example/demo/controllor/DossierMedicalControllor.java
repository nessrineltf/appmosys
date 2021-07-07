package com.example.demo.controllor;

import com.example.demo.model.*;
import com.example.demo.repository.DossierMedicalRepository;
import com.example.demo.repository.ParaPharmacieRepository;
import com.example.demo.repository.PatientRepository;
import com.example.demo.repository.VilleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/dossierMedical")
public class DossierMedicalControllor {
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private DossierMedicalRepository dossierMedicalRepository;

    @PostMapping("add")
    public DossierMedical ajoutDossier(@RequestBody DossierMedical dossierMedical){
        //Patient patient1 = patientRepository.getOne(id);
      //dossierMedical.setAppUserPatient(patient1);
        return dossierMedicalRepository.saveAndFlush(dossierMedical);

    }
    @GetMapping("all")
    public List<DossierMedical> getall(){
        return dossierMedicalRepository.findAll();
    }
    @PutMapping("edit/{id}")
    public DossierMedical modifier(@PathVariable Long id,@PathVariable Long idp,@RequestBody DossierMedical dossierMedical){
        dossierMedical.setId(id);
        Patient patient = patientRepository.getOne(idp);
        dossierMedical.setAppUserPatient(patient);
        return dossierMedicalRepository.saveAndFlush(dossierMedical);

    }
    @DeleteMapping("delete/{id}")
    public HashMap supprimer(@PathVariable Long id){
        HashMap<String,String> hashMap = new HashMap<>();
        try{
            dossierMedicalRepository.deleteById(id);
            hashMap.put("state","yes");
            return hashMap;
        }catch (Exception e){
            hashMap.put("state","no");
            return hashMap;
        }
    }
}
