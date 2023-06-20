import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './info-customer/components/form/form.component';
import { GraphicsComponent } from './graphics/graphics.component';


const routes: Routes = [

  {
    path:'home',
    component:FormComponent

  },
  {
    path:'form',
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
