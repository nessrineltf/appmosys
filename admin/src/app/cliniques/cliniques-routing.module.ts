import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HopitalesComponent} from '../hopitales/hopitales.component';
import {CliniquesComponent} from './cliniques.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CliniquesComponent,
        data: {
          title: 'List cliniques'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CliniquesRoutingModule { }
