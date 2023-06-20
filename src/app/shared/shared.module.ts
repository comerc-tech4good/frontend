import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    GraphicsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgChartsModule

  ],
  exports:[
    HeaderComponent,
    HomeComponent
  ]
})
export class SharedModule { }
