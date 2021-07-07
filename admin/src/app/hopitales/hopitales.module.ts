import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HopitalesRoutingModule } from './hopitales-routing.module';
import { HopitalesComponent } from './hopitales.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [HopitalesComponent],
  imports: [
    CommonModule,
    HopitalesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HopitalesModule { }
