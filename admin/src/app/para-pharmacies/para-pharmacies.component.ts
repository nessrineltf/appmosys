import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Pharmacie} from '../model/pharmacie';
import {ActivatedRoute} from '@angular/router';
import {PharmacieService} from '../servicess/pharmacie.service';
import {VilleService} from '../servicess/ville.service';
import Swal from "sweetalert2";
import {ParaPharmacieService} from '../servicess/parapharmacie.service';

@Component({
  selector: 'app-para-pharmacies',
  templateUrl: './para-pharmacies.component.html',
  styleUrls: ['./para-pharmacies.component.scss']
})
export class ParaPharmaciesComponent implements OnInit {
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
  constructor(private modalService: NgbModal,private actvroute: ActivatedRoute, private paraph: ParaPharmacieService , private villeService: VilleService, private formBuilder: FormBuilder) {
    this.getAllPharmacie();
    this.getAllVille();

  }

  ngOnInit(): void {
    this.pharmacieForm = this.formBuilder.group({
      nompara: ['', Validators.required],
      description: ['', Validators.required],
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
    this.paraph.getall().subscribe(data => {
      console.log('pharmmacie liste : ', data);
      this.pharmacieList = data;

    }, error => {
      console.log('data error:' ,error); });
  }


  recuper(idf,id, nompara,description,adresse,telephone) {
    this.idf=idf
    this.pharmacieForm.get('idv').setValue(id);
    this.pharmacieForm.get('nompara').setValue(nompara);
    this.pharmacieForm.get('description').setValue(description);
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
      nompara : this.pharmacieForm.get('nompara').value,
      description : this.pharmacieForm.get('description').value,
      adresse : this.pharmacieForm.get('adresse').value,
      telephone : this.pharmacieForm.get('telephone').value,
    }
    console.log(data)
    this.paraph.addPara(this.pharmacieForm.get('idv').value,data).subscribe(res => {
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
      nompara : this.pharmacieForm.get('nompara').value,
      description : this.pharmacieForm.get('description').value,
      adresse : this.pharmacieForm.get('adresse').value,
      telephone : this.pharmacieForm.get('telephone').value,
    }
    console.log("hi pharmacie ")
    this.paraph.updatePara(this.idf,this.pharmacieForm.get('idv').value,data).subscribe(res => {
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
        this.paraph.deletePara(id).subscribe(res => {
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

