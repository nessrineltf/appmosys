import { Component, OnInit } from '@angular/core';
import {LaboService} from '../../../servicess/labo.service';
@Component({
  selector: 'app-home-three',
  templateUrl: './home-three.component.html',
  styleUrls: ['./home-three.component.scss']
})
export class HomeThreeComponent implements OnInit {
  laboList:any;
  constructor(private laboService:LaboService) { }

  ngOnInit(): void {
    this.getAllLabo();
  }
  getAllLabo() {
    console.log("labo !")
      this.laboService.getall().subscribe(data => { 
          console.log('labo liste : ', data);
          this.laboList = data;

      }, error => {
          console.log('data error:' ,error); });
  }
}
