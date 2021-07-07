import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
    AlertController,
    IonList,
    IonRouterOutlet,
    LoadingController,
    ModalController,
    ToastController,
    Config,
    IonItemSliding
} from '@ionic/angular';

import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import {CrenauxRDVService} from '../../providers/creneauxrdv.service';
import { RendezVousService } from '../../providers/rendezvou.service';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss'],
})
export class SchedulePage implements OnInit {
  // Gets a reference to the list element
  @ViewChild('scheduleList', { static: true }) scheduleList: IonList;

  ios: boolean;
  dayIndex = 0;
  queryText = '';
  selectedSegment = 'allrdv';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  showSearchbar: boolean;
  rendezvouscrenaux: any=[];
  constructor(
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public user: UserData,
    public config: Config,
    private crenauxService: CrenauxRDVService,
    private rdvService: RendezVousService
  ) { }

  ngOnInit() {
    this.updateSchedule(event);
    this.getallCrenaux();

    this.ios = this.config.get('mode') === 'ios';
  }
  getallCrenaux() {
    this.crenauxService.getall().subscribe(data => {
      console.log('data : ', data);
      this.rendezvouscrenaux=JSON.parse(JSON.stringify(data));
    }, error => {
      console.log('data error:' , error); });

  }
  prendrerdv(id:any){

  }
  updateSchedule(event: any) {
    // Close any open sliding items when the schedule updates
    if (this.scheduleList) {
      this.scheduleList.closeSlidingItems();
      console.log(" hi ", this.selectedSegment);
      
    }

    // this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
    //   this.shownSessions = data.shownSessions;
    //   this.groups = data.groups;
    // });
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: ScheduleFilterPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { excludedTracks: this.excludeTracks }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.excludeTracks = data;
      //this.updateSchedule();
    }
  }

  // async addFavorite(slidingItem: IonItemSliding, sessionData: any) {
  //   if (this.user.hasFavorite(sessionData.name)) {
  //     // Prompt to remove favorite
  //     // @ts-ignore
  //     this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
  //   } else {
  //     // Add as a favorite
  //     this.user.addFavorite(sessionData.name);

  //     // Close the open item
  //     slidingItem.close();

  //     // Create a toast
  //     const toast = await this.toastCtrl.create({
  //       header: `${sessionData.name} was successfully added as a favorite.`,
  //       duration: 3000,
  //       buttons: [{
  //         text: 'Close',
  //         role: 'cancel'
  //       }]
  //     });

  //     // Present the toast at the bottom of the page
  //     await toast.present();
  //   }

  // }

  // async removeFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any, title: string) {
  //   const alert = await this.alertCtrl.create({
  //     header: title,
  //     message: 'Vous êtes sûr d annuler le rendez vous?',
  //     buttons: [
  //       {
  //         text: 'Annuler',
  //         handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
        //     slidingItem.close();
        //   }
        // },
        // {
        //   text: 'Supprimer',
        //   handler: () => {
            // they want to remove this session from their favorites
            //this.user.removeFavorite(sessionData.name);
           // this.rdvService.deleteRDV(rv.id);
           // this.updateSchedule();

            // close the sliding item and hide the option buttons
           // slidingItem.close();
    //       }
    //     }
    //   ]
    // });
    // now present the alert on top of all other content
  //   await alert.present();
  // }

  // async openSocial(network: string, fab: HTMLIonFabElement) {
  //   const loading = await this.loadingCtrl.create({
  //     message: `Posting to ${network}`,
  //     duration: (Math.random() * 1000) + 500
  //   });
  //   await loading.present();
  //   await loading.onWillDismiss();
  //   fab.close();
  // }

  demanderRDV(){

  }
}
