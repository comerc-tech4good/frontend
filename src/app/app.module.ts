import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test/test.component';
import { TestModule } from './test/test.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { InfoClientModule } from './info-client/info-client.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    HomeModule,
    InfoClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
