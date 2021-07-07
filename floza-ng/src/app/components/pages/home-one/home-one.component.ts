import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {VilleService} from '../../../servicess/ville.service';
import {SpecialiteService} from '../../../servicess/specialite.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {MedecinService} from '../../../servicess/medecin.service';
import { AuthenticationService } from 'src/app/servicess/authentication.service';
import {Patient} from '../../../model/patient';
@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {
    specialites: any;
    villesList: any;
    closeResult: string;
    medecinliste:any;
    submitted = false;
    id;
    // Patient = new Patient();
    ent=false;
  constructor(private modalService: NgbModal,private villeService: VilleService, private specialiteService: SpecialiteService,
             private medService: MedecinService, private authServ: AuthenticationService) { 
        console.log('encrypt', btoa('5725725752725752'))
        console.log('encrypt', atob('NTcyNTcyNTc1MjcyNTc1Mg=='))
    //     if (localStorage.getItem('Patient') === '1') {
    //       this.ent = true;
    //     }else if(localStorage.getItem('Medecin') === '0') {
    //       this.ent = true;
    // }
  }
    ngOnInit(): void {
        // this.registerForm = this.formBuilder.group({
        //   nom_specialite: ['', Validators.required]
    
        // });
        this.getAllSpecialite();
        this.getAllMedecin();
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
      // Open default modal
      open(content) {
        this.modalService.open(content).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }
    
      // This function is used in open
      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return `with: ${reason}`;
        }
      }
//   ngOnInit(): void {
//       this.getAllVille();
//       this.getAllSpecialite();

//   }
//     getAllSpecialite() {
//         this.specialiteService.getall().subscribe(data => {
//             console.log('data : ', data);
//             this.specialites = data;

//         }, error => {
//             console.log('data error:' ,error); });
//     }
    getAllVille() {
        this.villeService.getall().subscribe(data => {
            console.log('ville liste : ', data);
            this.villesList = data;

        }, error => {
            console.log('data error:' ,error); });
    }



}
