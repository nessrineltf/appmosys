import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedecinsComponent} from '../medecins/medecins.component';
import {PharmaciesComponent} from './pharmacies.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PharmaciesComponent,
        data: {
          title: 'List pharmacies'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmaciesRoutingModule { }
