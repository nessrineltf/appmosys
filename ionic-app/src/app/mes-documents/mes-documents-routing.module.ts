import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesDocumentsPage } from './mes-documents.page';

const routes: Routes = [
  {
    path: '',
    component: MesDocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesDocumentsPageRoutingModule {}
