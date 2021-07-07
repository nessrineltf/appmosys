import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesDocumentsPageRoutingModule } from './mes-documents-routing.module';

import { MesDocumentsPage } from './mes-documents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesDocumentsPageRoutingModule
  ],
  declarations: [MesDocumentsPage]
})
export class MesDocumentsPageModule {}
