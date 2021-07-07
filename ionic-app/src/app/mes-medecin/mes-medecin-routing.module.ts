import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesMedecinPage } from './mes-medecin.page';

const routes: Routes = [
  {
    path: '',
    component: MesMedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesMedecinPageRoutingModule {}
