import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LabosComponent} from '../labos/labos.component';
import {RadioComponent} from './radio.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RadioComponent,
        data: {
          title: 'List radios'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadioRoutingModule { }
