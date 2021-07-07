import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servicess/authentication.service';
import {Chart} from 'node_modules/chart.js';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  opened=false;
  id;
  user;
  ent=false;
 
  constructor(private atuhsrv:AuthenticationService) {
    if (localStorage.getItem('Medecin') === '0') {
      this.ent = true;
    }
   }

  ngOnInit(): void {
    this.getprofilemedecin();
   
  }
  getprofilemedecin(){
    this.atuhsrv.getprofile().subscribe(res => {
      console.log('user :  ',res); 
      this.user=res
            localStorage.setItem('user', res['id']);
      
           
          });
  }
  toggleSidebar(){
    this.opened = !this.opened;
  }
  logout(){
    this.atuhsrv.logout();
    
  }
 
}
