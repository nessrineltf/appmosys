import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillesRoutingModule } from './villes-routing.module';
import { VillesComponent } from './villes.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [VillesComponent],
    imports: [
        CommonModule,
        VillesRoutingModule,
        FormsModule,
      ReactiveFormsModule
    ]
})
export class VillesModule { }
