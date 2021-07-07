import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SpecialiteService} from '../servicess/specialite.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.scss']
})
export class SpecialiteComponent implements OnInit {
  closeResult: string;
  specialites: any;
  registerForm: FormGroup;
  submitted = false;
  id;
  constructor(private modalService: NgbModal,private specialiteService: SpecialiteService,private formBuilder: FormBuilder) {

  }

  ngOnInit(): void { 
    this.registerForm = this.formBuilder.group({
      nom_specialite: ['', Validators.required]

    });
    this.getAllSpecialite();
  }

  get f() { return this.registerForm.controls; }
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
  getAllSpecialite() {
    this.specialiteService.getall().subscribe(data => {
      console.log('data : ', data);
      this.specialites = data;

    }, error => {
      console.log('data error:' ,error); });
  }
  deleteSpecialite(id){
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
        this.specialiteService.deleteSpecialite(id).subscribe(res => {
          this.getAllSpecialite();
        });
        /*    Swal.fire(
              'Supprimé!',
              'Your file has been deleted.',
              'success'
            )*/
      }
    })

  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.specialiteService.addspecialte(this.registerForm.value).subscribe(res => {
      this.getAllSpecialite();
      this.onReset();
      this.modalService.dismissAll()
    });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
