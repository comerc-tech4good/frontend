import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { combineLatest } from 'rxjs';
import { HomeComponent } from './home/home/home.component';
import { InfoClientModule } from './info-client/info-client.module';


const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'info',
    component:InfoClientModule
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
