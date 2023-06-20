import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';




@NgModule({
  imports: [
    MatButtonModule,
    MatDividerModule
  ],
  exports:[
    MatButtonModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
