package com.example.demo;

import com.example.demo.repository.VilleRepository;
import com.example.demo.security.services.InitService;
import com.example.demo.utils.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.Resource;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

    @Resource
    StorageService storageService;
    @Autowired
    InitService initService;
    @Autowired
    VilleRepository villeRepository;

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        //storageService.deleteAll();
        //storageService.init();
        //initService.initSpecialite();
        //initService.initVille();
        //initService.initCrenaux();
    }
}
