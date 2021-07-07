import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {
  opened=false;
  constructor() { }

  ngOnInit(): void {
  } 
  toggleSidebar(){
    this.opened = !this.opened;
  }

}
