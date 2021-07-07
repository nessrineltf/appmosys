import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PharmaciesComponent} from '../pharmacies/pharmacies.component';
import {HopitalesComponent} from './hopitales.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HopitalesComponent,
        data: {
          title: 'List hopitales'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HopitalesRoutingModule { }
