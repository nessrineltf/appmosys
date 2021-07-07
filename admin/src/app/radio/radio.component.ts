import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Radiologue } from 'app/model/radiologue';
import { VilleService } from 'app/servicess/ville.service';
import {RadioService} from 'app/servicess/radiologue.service'
import { ActivatedRoute } from '@angular/router';

import Swal from "sweetalert2";
@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  closeResult:String;
  radioForm: FormGroup;
  submitted = false;
 
  radiosList: any;
  radio : Radiologue =new Radiologue();
  villesList: any;
  id;
  idv;
  nom_ville;
  idr;
  constructor(private modalService:NgbModal ,private actvroute: ActivatedRoute, private radioService: RadioService , private villeService: VilleService, private formBuilder: FormBuilder) { 
    this.getAll();
    this.getAllVille();
  }

  ngOnInit(): void {
    this.radioForm = this.formBuilder.group({
      nomRadiologue: ['', Validators.required],
      description: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      idv: ['', Validators.required],
    });
  }
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

  getAllVille() {
    this.villeService.getall().subscribe(data => {
      console.log('ville liste : ', data);
      this.villesList = data;

    }, error => {
      console.log('data error:' ,error); });
  }
  get f() { return this.radioForm.controls; }

  getAll() {
    this.radioService.getall().subscribe(data => {
      console.log('labos liste : ', data);
      this.radiosList = data;
    }, error => {
      console.log('data error:' ,error); });
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid

    const data ={
      nomRadiologue: this.radioForm.get('nomRadiologue').value,
      telephone : this.radioForm.get('telephone').value,
      description : this.radioForm.get('description').value,
      adresse : this.radioForm.get('adresse').value,
      idv: this.radioForm.get('id').value

    }
    console.log('data labo ',data)
    this.radioService.addRadio(this.radioForm.get('idv').value,data).subscribe(res => {
      console.log("res data add hopital", res);
      this.getAll();
      this.onReset();
      this.modalService.dismissAll()
    });
    if (this.radioForm.invalid) {
      return;
    }
  }
  onReset() {
    this.submitted = false;
    this.radioForm.reset();
  }
  deleteradio(id){
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
        this.radioService.deleteRadio(id).subscribe(res => {
          this.getAll();
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
