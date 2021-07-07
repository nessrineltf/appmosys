import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialiteRoutingModule } from './specialite-routing.module';
import { SpecialiteComponent } from './specialite.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [SpecialiteComponent],
    imports: [
        CommonModule,
        SpecialiteRoutingModule,
        FormsModule,
      ReactiveFormsModule
    ]
})
export class SpecialiteModule { }
