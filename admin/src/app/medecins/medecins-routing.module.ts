import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VillesComponent} from '../villes/villes.component';
import {MedecinsComponent} from './medecins.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MedecinsComponent,
        data: {
          title: 'List medecins'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedecinsRoutingModule { }
