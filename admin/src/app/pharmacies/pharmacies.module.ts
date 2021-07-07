import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmaciesRoutingModule } from './pharmacies-routing.module';
import { PharmaciesComponent } from './pharmacies.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [PharmaciesComponent],
    imports: [
        CommonModule,
        PharmaciesRoutingModule,
        FormsModule,
      ReactiveFormsModule
    ]
})
export class PharmaciesModule { }
