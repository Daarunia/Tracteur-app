import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracteurComponent } from './tracteur.component';
import { TracteurDetailsComponent } from './pages/tracteur-details/tracteur-details.component';

const routes: Routes = [
  {
    path: '',
    component: TracteurComponent
  },
  {
    path: ':id',
    component: TracteurDetailsComponent
  }
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracteurRoutingModule { }
