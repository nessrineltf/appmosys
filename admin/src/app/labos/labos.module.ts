import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabosRoutingModule } from './labos-routing.module';
import { LabosComponent } from './labos.component';


@NgModule({
  declarations: [LabosComponent],
  imports: [
    CommonModule,
    LabosRoutingModule
  ]
})
export class LabosModule { }
