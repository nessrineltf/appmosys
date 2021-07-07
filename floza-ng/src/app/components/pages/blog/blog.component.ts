import { Component, OnInit } from '@angular/core';
import {CliniqueService} from '../../../servicess/clinique.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    cliniqueList: any;
  constructor(private cliniqueService: CliniqueService) { }

  ngOnInit(): void {
      this.getAllClinique();
  }
    getAllClinique() {
      console.log("clinique !")
        this.cliniqueService.getall().subscribe(data => {
            console.log('clinique liste : ', data);
            this.cliniqueList = data;

        }, error => {
            console.log('data error:' ,error); });
    }
}
