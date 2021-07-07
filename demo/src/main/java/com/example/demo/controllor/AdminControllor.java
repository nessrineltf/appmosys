package com.example.demo.controllor;


import com.example.demo.model.Admin;
import com.example.demo.model.Mail;
import com.example.demo.model.User;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.services.AccountService;
import com.example.demo.security.services.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/admin")
public class AdminControllor {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private AccountService accountService;
    @Autowired
    private MailService emailService;
    @PostMapping("/add")
    public User registeradmin(@RequestBody Admin admin ){

        return  accountService.saveadmin(admin);
    }

    @GetMapping("/users")
    public User getuser(Principal principal){
        return  userRepository.findByUsername(principal.getName());
    }

    @GetMapping("/all_admin")
    public List<User> get_all_admin() {
        List<User> admins = new ArrayList<>();
        for(User utilisateur:userRepository.findAll())
            if(utilisateur.getClass()== Admin.class )
                admins.add(utilisateur);
        return  admins;
    }
    @DeleteMapping("/delete/{id}")
    public HashMap deleteadminn(@PathVariable Long id) {
        HashMap<String,String> hashMap= new HashMap<>();
        try {
            adminRepository.deleteById(id);
            hashMap.put("state","yes");
            return  hashMap;
        } catch (Exception e) {
            hashMap.put("state","no");
            return hashMap;
        }
    }
    @PostMapping("/sendMail")
    public String sendMail(@RequestBody Mail maill){

        Mail mail = new Mail();
        mail.setFrom("nessrineltf@gmail.com");
        mail.setTo(maill.getTo());
        mail.setSubject(maill.getSubject());
        mail.setContent(maill.getContent());

        emailService.sendSimpleMessage(mail);
        return "ok";
    }
}
