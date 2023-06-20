import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GraphicsComponent } from './graphics.component';



@NgModule({
  declarations: [GraphicsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GraphicsModule { }
