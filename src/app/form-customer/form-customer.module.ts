import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class FormCustomerModule { }
