import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgChartsModule } from 'ng2-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';
import { InfoCustomerModule } from './info-customer/info-customer.module';
import { RouterModule } from '@angular/router';
import { GraphicsModule } from './graphics/graphics.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    NgChartsModule,
    InfoCustomerModule,
    HttpClientModule,
    RouterModule,
    GraphicsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
