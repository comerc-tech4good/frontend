import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { InfoCustomerModule } from './info-customer/info-customer.module';
import { FormComponent } from './info-customer/components/form/form.component';


const routes: Routes = [

  {
    path:'home',
    component:HomeComponent

  },
  {
    path:'customer',
    component:FormComponent
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
