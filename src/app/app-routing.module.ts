import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraphicsComponent } from './graphics/graphics.component';
import { InfoCustomerComponent } from './info-customer/info-customer.component';


const routes: Routes = [

  {
    path:'home',
    component:InfoCustomerComponent

  },
  {
    path:'graphics',
    component:GraphicsComponent
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
