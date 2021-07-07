import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VillesComponent} from './villes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: VillesComponent,
        data: {
          title: 'List villes'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillesRoutingModule { }
