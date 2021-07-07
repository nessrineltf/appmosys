import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PharmaciesComponent} from '../pharmacies/pharmacies.component';
import {ParaPharmaciesComponent} from './para-pharmacies.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ParaPharmaciesComponent,
        data: {
          title: 'List para_pharmacies'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParaPharmaciesRoutingModule { }
