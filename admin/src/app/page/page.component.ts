import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {SpecialiteService} from '../servicess/specialite.service';
import {MedecinService} from '../servicess/medecin.service';
import {RessourceService} from '../servicess/ressource.service';
import {arrayLength} from 'ngx-custom-validators/src/app/array-length/validator';
import {AuthenticationsService} from '../servicess/authentification.service';
import {PatientService} from '../servicess/patient.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent {
  users:any;
  specialites: any;
  villesList: any;
  medecinliste:any;
  patientliste:any;
  constructor(private router: Router, private specialiteService: SpecialiteService, private medService: MedecinService
                , private ressourceService: RessourceService, private authService: AuthenticationsService, private patientServi: PatientService) {

  }

  ngOnInit() {
    this.getAllUsers();
     this.getAllSpecialite();
    this.getAllMedecin();
    this.getAllPatient();

  }
  getAllMedecin(){
    this.medService.getall().subscribe(data => {
      console.log('data : ', data);
      this.medecinliste = data;


    }, error => {
      console.log('data error:' ,error); });

  }
  getAllSpecialite() {
    this.specialiteService.getall().subscribe(data => {
      console.log('data : ', data);
      this.specialites = data;

    }, error => {
      console.log('data error:' ,error); });
  }
  getAllUsers(){
    this.authService.getprofile().subscribe(data => {
      console.log('data : ', data);
      this.users = data;

    }, error => {
      console.log('data error:' ,error); });
  }
  getAllPatient(){
    this.patientServi.getall().subscribe(data => {
      console.log('data : ', data);
      this.patientliste = data;


    }, error => {
      console.log('data error:' ,error); });

  }
}
