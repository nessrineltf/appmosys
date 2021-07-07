import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, RouteConfigLoadStart, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { Ville } from 'src/app/model/ville';
import { AuthenticationService } from 'src/app/servicess/authentication.service';
import { PatientService } from 'src/app/servicess/patient.service';
import { VilleService } from 'src/app/servicess/ville.service';
import { DialogAddPatientComponent } from '../dialog-add-patient/dialog-add-patient.component';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  patientList: any;
  villesList:any;
  patient  : Patient=new Patient();
  ville: Ville = new Ville();
  idv;
  opened=false;
  user;
  ent=false;
  constructor( private servicePatient: PatientService,private dialog: MatDialog,private atuhsrv:AuthenticationService
    ,private router:Router,private villeService: VilleService , private route:ActivatedRoute) {
      if (localStorage.getItem('Medecin') === '0') {
        this.ent = true;
     }

    }

  ngOnInit() {
    this.getprofilemedecin();
    this.getAllPatient(); 
  }

  getprofilemedecin(){
    this.atuhsrv.getprofile().subscribe(res => {
      console.log('user :  ',res); 
      this.user=res
            localStorage.setItem('user', res['id']);
      
           
          });
  }
  toggleSidebar(){
    this.opened = !this.opened;
  }
  getAllPatient() {
    this.servicePatient.getall().subscribe(data => {
        console.log('patient liste : ', data);
        this.patientList = data;

    }, error => {
        console.log('data error:' ,error); });
}
openDialog() {

  const dialogRef = this.dialog.open(DialogAddPatientComponent, {
    data: {first_name: this.patient.first_name, last_name: this.patient.last_name, ville:this.idv , adresse: this.patient.adresse, 
            maladie: this.patient.maladie, dateNaissance:this.patient.dateNaissance , sexe : this.patient.sexe,
          telephone: this.patient.telephone }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.patient = result;
  });
}
getAllVille() {
  this.villeService.getall().subscribe(data => {
    console.log('ville liste : ', data);
    this.villesList = data;

  }, error => {
    console.log('data error:' ,error); });
}
suivipatient(id){
  //this.router.navigate(['patient'],id);
  this.servicePatient.getByid(id).subscribe(res=>{
    console.log(res);
    
    this.router.navigate(['patient'],res);
  })
}
}
