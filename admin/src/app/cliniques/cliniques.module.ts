import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CliniquesRoutingModule } from './cliniques-routing.module';
import { CliniquesComponent } from './cliniques.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CliniquesComponent],
  imports: [
    CommonModule,
    CliniquesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CliniquesModule { }
