import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { VilleService } from 'app/servicess/ville.service';
import { Laboratoire } from 'app/model/laboratoire';
import {LaboService} from '../servicess/labo.service';

import Swal from "sweetalert2";

@Component({
  selector: 'app-labos',
  templateUrl: './labos.component.html',
  styleUrls: ['./labos.component.scss']
})
export class LabosComponent implements OnInit {
  closeResult:String;
  labosForm: FormGroup;
  submitted = false;
 
  labosList: any;
  labo : Laboratoire =new Laboratoire();
  villesList: any;
  id;
  idv;
  nom_ville;
  idl;
  constructor(private modalService: NgbModal,private actvroute: ActivatedRoute, 
    private laboService: LaboService , private villeService: VilleService, 
    private formBuilder: FormBuilder) 
    {
      this.getAll();
      this.getAllVille();
     }

  ngOnInit(): void {

    this.labosForm = this.formBuilder.group({
      nomLabo	: ['', Validators.required],
      telephone: ['', Validators.required],
      description: ['', Validators.required],
      adresse: ['', Validators.required],
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
  get f() { return this.labosForm.controls; }

  getAll() {
    this.laboService.getall().subscribe(data => {
      console.log('labos liste : ', data);
      this.labosList = data;
    }, error => {
      console.log('data error:' ,error); });
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid

    const data ={
      nomLabo: this.labosForm.get('nomLabo').value,
      telephone : this.labosForm.get('telephone').value,
      description : this.labosForm.get('description').value,
      adresse : this.labosForm.get('adresse').value,
      idv: this.labosForm.get('id').value

    }
    console.log('data labo ',data)
    this.laboService.addLabo(this.labosForm.get('idv').value,data).subscribe(res => {
      console.log("res data add hopital", res);
      this.getAll();
      this.onReset();
      this.modalService.dismissAll()
    });
    if (this.labosForm.invalid) {
      return;
    }
  }
  onReset() {
    this.submitted = false;
    this.labosForm.reset();
  }
  deletelabo(id){
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
        this.laboService.deleteLabo(id).subscribe(res => {
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
