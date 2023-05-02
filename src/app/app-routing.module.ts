import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },
  {
    path: 'students',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'tracteurs',
    loadChildren: () => import('./tracteur/tracteur.module').then(m => m.TracteurModule)
  },
  {
    path: 'marques',
    loadChildren: () => import('./marque/marque.module').then(m => m.MarqueModule)
  },
  {
  path : '**',
  component: NotFoundComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
