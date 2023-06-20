import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    GraphicsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
