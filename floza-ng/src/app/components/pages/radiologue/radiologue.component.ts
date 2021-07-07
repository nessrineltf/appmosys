import { Component, OnInit } from '@angular/core';
import {RadiologueService} from '../../../servicess/radiologue.service';
@Component({
  selector: 'app-radiologue',
  templateUrl: './radiologue.component.html',
  styleUrls: ['./radiologue.component.scss']
})
export class RadiologueComponent implements OnInit {
radioListe:any;
  constructor(private radiologueService: RadiologueService) { }

  ngOnInit(): void {
    this.getAllRadiologues();
  }
  getAllRadiologues() {
    console.log("radiologue !")
      this.radiologueService.getall().subscribe(data => {
          console.log('radiologue liste : ', data);
          this.radioListe = data;

      }, error => {
          console.log('data error:' ,error); });
  }
}
