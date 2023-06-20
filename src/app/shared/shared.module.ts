import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { MaterialModule } from './material/material.module';
import { NgChartsModule } from 'ng2-charts';
import { RadarComponent } from './components/radar/radar.component';
import { TwoGraphicsComponent } from './components/two-graphics/two-graphics.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    GraphicsComponent,
    RadarComponent,
    TwoGraphicsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgChartsModule,
    RouterModule

  ],
  exports:[
    HeaderComponent,
    LoadingComponent,
    GraphicsComponent,
    RadarComponent,
    TwoGraphicsComponent
  ]
})
export class SharedModule { }
