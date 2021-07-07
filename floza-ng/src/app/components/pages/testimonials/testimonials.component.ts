import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {PatientService} from '../../../servicess/patient.service';
import Swal from "sweetalert2";
import { AuthenticationService } from 'src/app/servicess/authentication.service';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  opened=false;
  ent=false;
  user;
  patientList: any;
  constructor(public dialog: MatDialog , private servicePatient: PatientService, private atuhsrv:AuthenticationService) { 
    if (localStorage.getItem('Medecin') === '0') {
      this.ent = true;
    }
    this.getprofilemedecin();}

  ngOnInit(): void {
    this.getAllPatient();
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
deleteppatient(id){
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: "Vous ne pourrez pas revenir en arrière!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, supprimez-le!'
  }).then((result) => {

    if (result.isConfirmed) {
      this.servicePatient.delete_patient(id).subscribe(res => {
        this.getAllPatient();
      });
      /*    Swal.fire(
            'Supprimé!',
            'Your file has been deleted.',
            'success'
          )*/
    }
  })

}
  opendialogAddPatient(){
    
  }
  getprofilemedecin(){
    this.atuhsrv.getprofile().subscribe(res => {
      console.log('user :  ',res); 
      this.user=res
            localStorage.setItem('user', res['id']);
      
           
          });
  }
}
