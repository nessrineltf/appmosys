import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import {VilleService} from '../../providers/ville.service';
import {MedecinService} from '../../providers/medecin.service';
import {SpecialiteService} from '../../providers/specialite.service';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  speakers: any[] = [];

  // tslint:disable-next-line:ban-types
  medecins: any;
  specialites: any;
  constructor(public confData: ConferenceData, private medService: MedecinService ,
              private villeService: VilleService, private specialiteService: SpecialiteService) {}

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
    this.getAllMedecin();
    this.getAllSpecialite();
  }
  getAllMedecin() {
    this.medService.getall().subscribe(data => {
      console.log('data : ', data);
      this.medecins = data;

    }, error => {
      console.log('data error:' , error); });
  }
  getAllSpecialite() {
    this.specialiteService.getall().subscribe(data => {
      console.log('data : ', data);
      this.specialites = data;

    }, error => {
      console.log('data error:' , error); });
  }
}
