package com.example.demo.controllor;

import com.example.demo.model.Patient;
import com.example.demo.model.User;
import com.example.demo.repository.PatientRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/patient")
public class PatientControllor {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private AccountService accountService;
    @PostMapping("/add")
    public User registerpatient(@RequestBody Patient patient){
        return  accountService.savepatient(patient);
    }
    @PutMapping("/update/{id}")
    public Patient updateUser(Patient patient, @PathVariable Long id) {
        patient.setId(id);
        return patientRepository.saveAndFlush(patient);

    }

    @DeleteMapping("/remove/{idUser}")
    public HashMap<String, String> deleteUser(@PathVariable Long idUser) {

        HashMap hashMap = new HashMap();
        try {
            patientRepository.deleteById(idUser);


            hashMap.put("state", "yes");

            return hashMap;

        } catch (Exception e) {

            hashMap.put("state", "no");


            return hashMap;


        }

    }

    @GetMapping("/byId/{idUser}")
    public Patient findUserByIdUser( @PathVariable Long idUser) {

        return patientRepository.getOne(idUser);
    }
    @GetMapping("/all")
    public List<User> getAllPatient() {
        List<User> appUsers = new ArrayList<>();
        for (User user : userRepository.findAll()) {
            if (user.getClass() == Patient.class)
                appUsers.add(user);
        }
        return appUsers;
    }
    @GetMapping("/users")
    public User getuser(Principal principal){
        return  userRepository.findByUsername(principal.getName());
    }

}
