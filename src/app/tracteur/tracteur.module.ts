import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TracteurComponent } from './tracteur.component';
import { TracteurRoutingModule } from './tracteur-routing.module';
import { TracteurService } from './services/tracteur.service';
import { TracteurListComponent } from './pages/tracteur-list/tracteur-list.component';
import { TracteurFormComponent } from './components/tracteur-form/tracteur-form.component';
import { MarqueService } from '../marque/services/marque.service';


@NgModule({
  declarations: [
    TracteurComponent,
    TracteurListComponent,
    TracteurFormComponent
  ],
  imports: [
    CommonModule,
    TracteurRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatOptionModule,
    MatDatepickerModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    TracteurService,
    MarqueService
  ]
})
export class TracteurModule { }
