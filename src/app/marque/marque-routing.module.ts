import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarqueComponent } from './marque.component';
import { MarqueDetailsComponent } from './pages/marque-details/marque-details.component';

const routes: Routes = [
  {
    path: '',
    component: MarqueComponent
  },
  {
    path: ':id',
    component: MarqueDetailsComponent
  }
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarqueRoutingModule { }
