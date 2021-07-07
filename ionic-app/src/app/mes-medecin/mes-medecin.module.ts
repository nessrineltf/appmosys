import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesMedecinPageRoutingModule } from './mes-medecin-routing.module';

import { MesMedecinPage } from './mes-medecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesMedecinPageRoutingModule
  ],
  declarations: [MesMedecinPage]
})
export class MesMedecinPageModule {}
