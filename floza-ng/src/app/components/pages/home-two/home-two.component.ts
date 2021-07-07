import { Component, OnInit } from '@angular/core';
import {VilleService} from '../../../servicess/ville.service';
import {PharmacieService} from '../../../servicess/pharmacie.service';
import {ParaPharmacieService} from '../../../servicess/parapharmacie.service';
@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent implements OnInit {
    villesList: any;
    parapharmacieListe: any;
    pharmacieListe: any;
  constructor(private villeService: VilleService, private pharmaciService: PharmacieService, private parapharmaciService: ParaPharmacieService) { }

  ngOnInit(): void {
      this.getAllVille();
      this.getAllPharmacie();
      this.getAllparaPharmacie();
  }
    getAllVille() {
        this.villeService.getall().subscribe(data => {
            console.log('ville liste : ', data);
            this.villesList = data;

        }, error => {
            console.log('data error:' ,error); });
    }
    getLocalisation(){

    }
    getAllPharmacie() {
        this.pharmaciService.getall().subscribe(data => {
            console.log('pharmacie liste : ', data);
            this.pharmacieListe = data;

        }, error => {
            console.log('data error:' ,error); });
    }
    getAllparaPharmacie() {
        this.parapharmaciService.getall().subscribe(data => {
            console.log('pharmacie liste : ', data);
            this.parapharmacieListe = data;

        }, error => {
            console.log('data error:' ,error); });
    }

}
