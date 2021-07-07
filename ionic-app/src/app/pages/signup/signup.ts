import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



import { PatientService } from '../../providers/patient.service';
import { Patient } from '../../interfaces/patient';
import { Observable } from 'rxjs';
import { ImageService } from '../../providers/image.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: Patient = new Patient();
  submitted = false;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;
  constructor(
    public router: Router,
    public userData: PatientService,
    private uploadService: ImageService
  ) {
    
    

  }
  
  ngOnInit() {
    this.fileInfos = this.uploadService.getFiles();
  }
  addPatient(){
    console.log(this.signup);
    this.userData.add_patient(this.signup).subscribe(res=>{
      
      console.log('patient ajouter',res);
      
    })
  }

  onSignup(form: NgForm) {
    this.submitted = true;
    const data={
     username: this.signup.username,
     photo : this.signup.photo,
    first_name:this.signup.first_name,
    last_name:this.signup.last_name,
    sexe:this.signup.sexe,
    etat:this.signup.etat,
    email:this.signup.email,
    password:this.signup.password,
    dateNaissance:this.signup.dateNaissance,
    maladie:this.signup.maladie,
    adresse:this.signup.adresse,
    telephone:this.signup.telephone
    }
    if (form.valid) {
      console.log("data add :",data);
      
      this.userData.add_patient(data).subscribe(res=>{
      
        console.log('patient ajouter',res);
        
      })
      this.router.navigateByUrl('/login');
    }
  }
  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          // @ts-ignore
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
