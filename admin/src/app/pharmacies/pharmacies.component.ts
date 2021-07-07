import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PharmacieService} from '../servicess/pharmacie.service';
import {Ville} from '../model/ville';
import {VilleService} from '../servicess/ville.service';
import { Pharmacie } from "../model/pharmacie";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.scss']
})
export class PharmaciesComponent implements OnInit {
  pharmacieForm: FormGroup;
  submitted = false;
  closeResult: string;
  pharmacieList: any;
  pharmacie : Pharmacie=new Pharmacie();
  villesList: any;
  id;
  idv;
  nom_ville;
  idf;
  constructor(private modalService: NgbModal,private actvroute: ActivatedRoute, private pharmacieService: PharmacieService , private villeService: VilleService, private formBuilder: FormBuilder) {
    this.getAllPharmacie();
    this.getAllVille();

  }

  ngOnInit(): void {
    this.pharmacieForm = this.formBuilder.group({
      nompharmacie: ['', Validators.required],
      description: ['', Validators.required],
      typepharmacie: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      idv: ['', Validators.required],
    });
  }
  get f() { return this.pharmacieForm.controls; }
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

  getAllPharmacie() {
    this.pharmacieService.getall().subscribe(data => {
      console.log('pharmmacie liste : ', data);
      this.pharmacieList = data;

    }, error => {
      console.log('data error:' ,error); });
  }


  recuper(idf,id, nompharmacie,description,typepharmacie,adresse,telephone) {
    this.idf=idf
    this.pharmacieForm.get('idv').setValue(id);
    this.pharmacieForm.get('nompharmacie').setValue(nompharmacie);
    this.pharmacieForm.get('description').setValue(description);
    this.pharmacieForm.get('typepharmacie').setValue(typepharmacie);
    this.pharmacieForm.get('adresse').setValue(adresse);
    this.pharmacieForm.get('telephone').setValue(telephone);

  }


  getAllVille() {
    this.villeService.getall().subscribe(data => {
      console.log('ville liste : ', data);
      this.villesList = data;

    }, error => {
      console.log('data error:' ,error); });
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.pharmacieForm.invalid) {
       return; 
    }
    const data ={
      nompharmacie : this.pharmacieForm.get('nompharmacie').value,
      description : this.pharmacieForm.get('description').value,
      typepharmacie : this.pharmacieForm.get('typepharmacie').value,
      adresse : this.pharmacieForm.get('adresse').value,
      telephone : this.pharmacieForm.get('telephone').value,
    }
  console.log(data)
    this.pharmacieService.addPharmacie(this.pharmacieForm.get('idv').value,data).subscribe(res => {
      console.log("res data add pharmacie", res);
      this.getAllPharmacie();
      this.onReset();
      this.modalService.dismissAll()
    });
  }
  editpharmacie(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.pharmacieForm.invalid) {
      return;
    }
    const data ={
      nompharmacie : this.pharmacieForm.get('nompharmacie').value,
      description : this.pharmacieForm.get('description').value,
      typepharmacie : this.pharmacieForm.get('typepharmacie').value,
      adresse : this.pharmacieForm.get('adresse').value,
      telephone : this.pharmacieForm.get('telephone').value,
    }
    console.log("hi pharmacie ")
    this.pharmacieService.updatePharmacie(this.idf,this.pharmacieForm.get('idv').value,data).subscribe(res => {
      console.log("res", res);
      this.getAllPharmacie();
      this.onReset();
      this.modalService.dismissAll()
    });
  }
  onReset() {
    this.submitted = false;
    this.pharmacieForm.reset();
  }
  deletepharmacie(id){
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
        this.pharmacieService.deletePharmacie(id).subscribe(res => {
          this.getAllPharmacie();
        });
        /*    Swal.fire(
              'Supprimé!',
              'Your file has been deleted.',
              'success'
            )*/
      }
    })

  }
}

