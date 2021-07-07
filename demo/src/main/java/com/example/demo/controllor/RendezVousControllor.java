package com.example.demo.controllor;


import com.example.demo.model.RendezVous;

import com.example.demo.repository.RendezVousRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/rendezvous")
public class RendezVousControllor {
    @Autowired
    private RendezVousRepository rendezvouRepository;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add}")
    public RendezVous registerRendezVous(@RequestBody RendezVous rendezVous ){

        return rendezvouRepository.saveAndFlush(rendezVous);
    }

    @GetMapping("/all")
    public List<RendezVous> get_allrdv() {
        List<RendezVous> r = new ArrayList<>();
        for(RendezVous rendezVous:rendezvouRepository.findAll())
            if(rendezVous.getClass()== RendezVous.class )
                r.add(rendezVous);
        return r;
    }
    @DeleteMapping("/delete/{id}")
    public HashMap deleterdv(@PathVariable Long id) {
        HashMap<String,String> hashMap= new HashMap<>();
        try {
            rendezvouRepository.deleteById(id);
            hashMap.put("state","yes");
            return  hashMap;
        } catch (Exception e) {
            hashMap.put("state","no");
            return hashMap;
        }
    }
    @GetMapping("/byId/{idUser}")
    public RendezVous findById(@PathVariable Long idrdv) {
        return rendezvouRepository.getOne(idrdv);
    }
    @PutMapping("edit/{id}")
    public RendezVous modifier(@RequestBody RendezVous rdv, @PathVariable Long id){
        rdv.setId(id);

        return rendezvouRepository.saveAndFlush(rdv);


    }
}
