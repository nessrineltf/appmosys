import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Patient } from 'src/app/model/patient';
import { VilleService } from 'src/app/servicess/ville.service';

@Component({
  selector: 'app-dialog-add-patient',
  templateUrl: './dialog-add-patient.component.html',
  styleUrls: ['./dialog-add-patient.component.scss']
})
export class DialogAddPatientComponent implements OnInit {
  form: FormGroup;
  first_name:string;
  villesList:any;
  constructor(private fb: FormBuilder,private villeService: VilleService,private http: HttpClient,
    private dialogRef: MatDialogRef<DialogAddPatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Patient) { 
     
    }

  ngOnInit(): void {
   this.getAllVille();
  }

onNoClick(): void {
  this.dialogRef.close();
}
getAllVille() {
  this.villeService.getall().subscribe(data => {
    console.log('ville liste : ', data);
    this.villesList = data;

  }, error => {
    console.log('data error:' ,error); });
}
}
