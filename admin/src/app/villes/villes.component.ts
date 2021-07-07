import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {VilleService} from '../servicess/ville.service';
import {number} from 'ngx-custom-validators/src/app/number/validator';
import Swal from 'sweetalert2'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.scss']
})

export class VillesComponent implements OnInit {
  closeResult: string;
  villesList: any;
  registerForm: FormGroup;
  submitted = false;
  id;
  constructor(private modalService: NgbModal, private villeService:VilleService,private formBuilder: FormBuilder) {

    this.getAllVille();
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      longtitude: ['', Validators.required],
      latitude: ['', Validators.required],
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
  get f() { return this.registerForm.controls; }
  // This function is used in open
  private getDismissReason(reason?: any): string {
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
  deleteVille(id){
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
        this.villeService.deleteville(id).subscribe(res => {
          this.getAllVille();
        });
    /*    Swal.fire(
          'Supprimé!',
          'Your file has been deleted.',
          'success'
        )*/
      }
    })

  }
  editVille(id,data){
    console.log("hi ville")
    this.villeService.updateville(id,data).subscribe(res => {
      console.log("res", res);
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.villeService.addville(this.registerForm.value).subscribe(res => {
      this.getAllVille();
      this.onReset();
      this.modalService.dismissAll()
    });
  } 
  editville() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.villeService.updateville(this.id,this.registerForm.value).subscribe(res => {
      this.getAllVille();
      this.onReset();
      this.modalService.dismissAll()
    });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  getdata(id,nom,longtitude,latitude){
    this.id=id,
      this.registerForm.get('nom').setValue(nom)
      this.registerForm.get('longtitude').setValue(longtitude)
      this.registerForm.get('latitude').setValue(latitude)
  }
}
