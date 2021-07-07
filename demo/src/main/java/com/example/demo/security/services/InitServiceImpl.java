package com.example.demo.security.services;

import com.example.demo.model.Creneaurdv;
import com.example.demo.model.DossierMedical;
import com.example.demo.model.Specialite;
import com.example.demo.model.Ville;
import com.example.demo.repository.CreneauxrdvRepository;
import com.example.demo.repository.DossierMedicalRepository;
import com.example.demo.repository.SpecialiteRepository;
import com.example.demo.repository.VilleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.stream.Stream;

@Service
public class InitServiceImpl implements InitService {
    @Autowired
    SpecialiteRepository specialiteRepository;
    @Autowired
    VilleRepository villeRepository;
    @Autowired
    DossierMedicalRepository dossierMedicalRepository;
    @Autowired
    CreneauxrdvRepository creneauxrdvRepository;
    @Override
    public void initSpecialite() {
        Stream.of("Addictologue","Allergologue","Anatomiste","Anesthésiste","Biologiste médical",
                "Cancérologue", "Cardiologue","Chirurgien","Clinicien","Dentiste","Dermatologue",
                "Endocrinologue","Médecin généticien","Gynécologue","Hématologue","Hépato-gastro-entérologue","Virologue",
                "Homéopathe","Immunologiste","Médecin légiste","Médecin de santé publique","Médecin généraliste","Vétérinaire",
                "Néphrologue","Neurologue","Personnalité de la médecine non conventionnelle","Obstétricien","Ophtalmologue",
                "Orthopédiste","Oto-rhino-laryngologiste","Parasitologiste","Pathologiste","Médecin du sport","Toxicologue",
                "Pédiatre","Pneumologue","Proctologue","Psychiatre","Radiologue","Rhumatologue","Sexologue","Urologue","Vénérologue"
        ).forEach(nomSpesialite->{
            Specialite specialite=new Specialite();
            specialite.setNom_specialite(nomSpesialite);
            specialiteRepository.save(specialite);
        });

    }

    @Override
    public void initVille() {
        Stream.of("Monastir","Sousse","Tunis","Ariana",
                "Tozeur", "Sfax","Kairouan","Béja","Jendouba","Gafsa",
                "Nabeul","Tataouine","Kébili","Zaghouan","Siliana","La Manouba","Gabès",
                "Sidi Bouzid","Mahdia","Le Kef","Médenine","Kasserine","Ben Arous","Bizerte"
        ).forEach(nomVille->{
            Ville ville=new Ville();
            ville.setNom(nomVille);
            villeRepository.save(ville);
        });
    }
    @Override
    public void intDossierMedical(){
        DossierMedical dossierMedical= new DossierMedical();
        dossierMedical.setNumDossier((long) (3+(int)(Math.random()*7)));
    }
//    @Override
//    public void initCrenaux(){
//        DateFormat dateFormat= new SimpleDateFormat("HH:mm");
//        DateFormat dateFormat1= new SimpleDateFormat("HH:mm");
//        Stream.of("9:30", "10:00", "10:30", "11:00","11:30", "12:00").forEach(date->{
//            Creneaurdv creneaurdv=new Creneaurdv();
//            try {
//                creneaurdv.setDebut(dateFormat.parse(date));
//                creneauxrdvRepository.save(creneaurdv);
//            }catch (ParseException parseException){
//                parseException.printStackTrace();
//            }
 //        });

//        Stream.of( "10:00", "10:30", "11:00","11:30", "12:00","12:30").forEach(date->{
//            Creneaurdv creneaurdv=new Creneaurdv();
//            try {
//                creneaurdv.setFin(dateFormat1.parse(date));
//            }catch (ParseException parseException){
//                parseException.printStackTrace();
//            }
//        });

//    }
}
