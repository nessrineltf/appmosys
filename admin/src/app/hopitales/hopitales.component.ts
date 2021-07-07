import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {VilleService} from '../servicess/ville.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Pharmacie} from '../model/pharmacie';
import {ActivatedRoute} from '@angular/router';
import {ParaPharmacieService} from '../servicess/parapharmacie.service';
import {HopitaleService} from '../servicess/hopitale.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-hopitales',
  templateUrl: './hopitales.component.html',
  styleUrls: ['./hopitales.component.scss']
})
export class HopitalesComponent implements OnInit {
  closeResult: string;
  hopitalForm: FormGroup;
  submitted = false;
  hopitalList: any;
  id;
  idv;
  nom_ville;
  idf;
  villesList: any;
  constructor(private modalService: NgbModal,private actvroute: ActivatedRoute, private srvchop: HopitaleService , private villeService: VilleService, private formBuilder: FormBuilder) {

    this.getAllVille();
    this.getAllHopital();

  }

  ngOnInit(): void {
    this.hopitalForm = this.formBuilder.group({
      nomhopitale: ['', Validators.required],
      tel_urgence: ['', Validators.required],
      tel_secondaire: ['', Validators.required],
      nomdirecteur: ['', Validators.required],
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
  get f() { return this.hopitalForm.controls; }

  getAllHopital() {
    this.srvchop.getall().subscribe(data => {
      console.log('hopital liste : ', data);
      this.hopitalList = data;
    }, error => {
      console.log('data error:' ,error); });
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid

    const data ={
      nomhopitale : this.hopitalForm.get('nomhopitale').value,
      tel_urgence : this.hopitalForm.get('tel_urgence').value,
      tel_secondaire : this.hopitalForm.get('tel_secondaire').value,
      nomdirecteur : this.hopitalForm.get('nomdirecteur').value,
      adresse : this.hopitalForm.get('adresse').value,

    }
    console.log(data)
    this.srvchop.addHop(this.hopitalForm.get('idv').value,data).subscribe(res => {
      console.log("res data add hopital", res);
      this.getAllHopital();
      this.onReset();
      this.modalService.dismissAll()
    });
    if (this.hopitalForm.invalid) {
      return;
    }
  }
  edithopital(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.hopitalForm.invalid) {
      return;
    }
    const data ={
      nomhopitale : this.hopitalForm.get('nomhopitale').value,
      tel_urgence : this.hopitalForm.get('tel_urgence').value,
      tel_secondaire : this.hopitalForm.get('tel_secondaire').value,
      nomdirecteur : this.hopitalForm.get('nomdirecteur').value,
      adresse : this.hopitalForm.get('adresse').value,
    }
    console.log("hi pharmacie ")
    this.srvchop.updateHop(this.idf,this.hopitalForm.get('idv').value,data).subscribe(res => {
      console.log("res", res);
      this.getAllHopital();
      this.onReset();
      this.modalService.dismissAll()
    });
  }
  onReset() {
    this.submitted = false;
    this.hopitalForm.reset();
  }
  deleteHopital(id){
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
        this.srvchop.deleteHop(id).subscribe(res => {
          this.getAllHopital();
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
