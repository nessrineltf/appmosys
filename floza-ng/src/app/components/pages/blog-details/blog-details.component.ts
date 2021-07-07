import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servicess/authentication.service';
import { CrenauxRDVService } from 'src/app/servicess/crenaux.service';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  opened=false;
  date;
  debut;
  fin;
  id;
  user;
  ent=false;
  crenaux = {'debut':'', 'fin':'', 'date':''}
  constructor(public crenauxService: CrenauxRDVService, private atuhsrv:AuthenticationService) {
    if (localStorage.getItem('Medecin') === '0') {
      this.ent = true;
   }
   this.getprofilemedecin();
   }
   getprofilemedecin(){
    this.atuhsrv.getprofile().subscribe(res => {
      console.log('user :  ',res); 
      this.user=res
            localStorage.setItem('user', res['id']);
      
           
          });
  }
  logout(){
    this.atuhsrv.logout();
  }
   addCrenau(crenaux){
     console.log(crenaux);
     
     this.crenauxService.addCrenaux(crenaux,this.user.id).subscribe(res=>{
       this.getAllCrenaux();
       console.log(res);
       
     })
   }
  ngOnInit(): void {
  }
  toggleSidebar(){
    this.opened = !this.opened;
  }
  getAllCrenaux(){
    
  }
}
