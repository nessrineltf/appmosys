import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedecinsComponent} from '../medecins/medecins.component';
import {SpecialiteComponent} from './specialite.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SpecialiteComponent,
        data: {
          title: 'List specialite'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialiteRoutingModule { }
