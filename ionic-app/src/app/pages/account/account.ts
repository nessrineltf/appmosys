import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../../providers/authentication.service';

import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit {

  ent=false;
  data;
  constructor(
    public alertCtrl: AlertController,
    public router: Router, private atuhsrv:AuthenticationService,
    public userData: UserData, private route:ActivatedRoute
  ) { 
    if (localStorage.getItem('Patient') === '1') {
      this.ent = true;
    }
    this.getprofilepatient();
    }
    getprofilepatient(){
      this.atuhsrv.getprofile().subscribe(res => {
        console.log('user :  ',res); 
        this.data=res
              localStorage.setItem('user', res['id']);
        
             
            });
    }
  ngAfterViewInit() {
    
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  
 

  logout() {
    //this.userData.logout();
    this.router.navigateByUrl('/login');
  }

  support() {
    this.router.navigateByUrl('/support');
  }
}
