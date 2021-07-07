import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {VilleService} from '../servicess/ville.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {HopitaleService} from '../servicess/hopitale.service';
import Swal from "sweetalert2";
import {CliniqueService} from '../servicess/clinique.service';
@Component({
  selector: 'app-cliniques',
  templateUrl: './cliniques.component.html',
  styleUrls: ['./cliniques.component.scss']
})
export class CliniquesComponent implements OnInit {
  closeResult: string;
  cliniqueForm: FormGroup;
  submitted = false;
  cliniquelist: any;
  id;
  idv;
  nom_ville;
  idf;
  villesList: any;
  constructor(private modalService: NgbModal,private actvroute: ActivatedRoute, private srvclq: CliniqueService , private villeService: VilleService, private formBuilder: FormBuilder) {

    this.getAllVille();
    this.getAll();

  }
  ngOnInit(): void {
    this.cliniqueForm = this.formBuilder.group({
      nomClinique	: ['', Validators.required],
      tel_urgence: ['', Validators.required],
      tel_secondaire: ['', Validators.required],
      nomDirecteur: ['', Validators.required],
      adresse: ['', Validators.required],
      idv: ['', Validators.required],
    });
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
  getAllVille() {
    this.villeService.getall().subscribe(data => {
      console.log('ville liste : ', data);
      this.villesList = data;

    }, error => {
      console.log('data error:' ,error); });
  }
  get f() { return this.cliniqueForm.controls; }

  getAll() {
    this.srvclq.getall().subscribe(data => {
      console.log('clinique liste : ', data);
      this.cliniquelist = data;
    }, error => {
      console.log('data error:' ,error); });
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid

    const data ={
      nomClinique : this.cliniqueForm.get('nomClinique').value,
      tel_urgence : this.cliniqueForm.get('tel_urgence').value,
      tel_secondaire : this.cliniqueForm.get('tel_secondaire').value,
      nomDirecteur : this.cliniqueForm.get('nomDirecteur').value,
      adresse : this.cliniqueForm.get('adresse').value,

    }
    console.log(data)
    this.srvclq.addClinique(this.cliniqueForm.get('idv').value,data).subscribe(res => {
      console.log("res data add hopital", res);
      this.getAll();
      this.onReset();
      this.modalService.dismissAll()
    });
    if (this.cliniqueForm.invalid) {
      return;
    }
  }

  onReset() {
    this.submitted = false;
    this.cliniqueForm.reset();
  }
  deleteclq(id){
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
        this.srvclq.deleteClinique(id).subscribe(res => {
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
