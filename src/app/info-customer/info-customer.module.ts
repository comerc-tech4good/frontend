import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoCustomerComponent } from './info-customer.component';



@NgModule({
  declarations: [
    InfoCustomerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    InfoCustomerComponent
  ]
})
export class InfoCustomerModule { }
