import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HopitalesComponent} from '../hopitales/hopitales.component';
import {LabosComponent} from './labos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LabosComponent,
        data: {
          title: 'List labos'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabosRoutingModule { }
