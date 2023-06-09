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
import { MarqueRoutingModule } from './marque-routing.module';
import { MarqueService } from './services/marque.service';
import { MarqueListComponent } from './pages/marque-list/marque-list.component';
import { MarqueComponent } from './marque.component';
import { MarqueFormComponent } from './components/marque-form/marque-form.component';
import { MarqueCardComponent } from './components/marque-card/marque-card.component';
import { MarqueDetailsComponent } from './pages/marque-details/marque-details.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    MarqueComponent,
    MarqueListComponent,
    MarqueFormComponent,
    MarqueCardComponent,
    MarqueDetailsComponent
  ],
  imports: [
    MatCardModule,
    MarqueRoutingModule,
    CommonModule,
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
    MarqueService
  ]
})
export class MarqueModule { }
