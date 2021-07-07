import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SpecialiteService} from '../servicess/specialite.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MedecinService} from '../servicess/medecin.service';
@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.scss']
})
export class MedecinsComponent implements OnInit {
  closeResult: string;
  registerForm: FormGroup;
  specialites: any;
  medecinliste:any;
  submitted = false;
  id;
  constructor(
    private modalService: NgbModal,private specialiteService: SpecialiteService,
    private formBuilder: FormBuilder, private medService: MedecinService) {
    console.log('encrypt', btoa('5725725752725752'))
    console.log('encrypt', atob('NTcyNTcyNTc1MjcyNTc1Mg=='))
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nom_specialite: ['', Validators.required]

    });
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
}
