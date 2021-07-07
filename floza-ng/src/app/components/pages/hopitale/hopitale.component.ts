import { Component, OnInit } from '@angular/core';
import {HopitaleService} from '../../../servicess/hopitale.service';
@Component({
  selector: 'app-hopitale',
  templateUrl: './hopitale.component.html',
  styleUrls: ['./hopitale.component.scss']
})
export class HopitaleComponent implements OnInit {
  hopitaleListe:any;
  constructor(private hopitaleService: HopitaleService) { }

  ngOnInit(): void {
    this.getAllhopitale();
  }
  getAllhopitale() {
    console.log("hopitale !")
      this.hopitaleService.getall().subscribe(data => {
          console.log('hopital liste : ', data);
          this.hopitaleListe = data;

      }, error => {
          console.log('data error:' ,error); });
  }
}
