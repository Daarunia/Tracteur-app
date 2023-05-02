import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracteurComponent } from './tracteur.component';

const routes: Routes = [
  {
    path: '',
    component: TracteurComponent
  },
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracteurRoutingModule { }
