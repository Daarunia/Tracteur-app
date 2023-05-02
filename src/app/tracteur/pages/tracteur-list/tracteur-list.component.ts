import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tracteur } from '../../models/tracteur';
import { TracteurService } from '../../services/tracteur.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracteur-list',
  templateUrl: './tracteur-list.component.html',
  styleUrls: ['./tracteur-list.component.sass']
})
export class TracteurListComponent {
  tracteurs$: Observable<Tracteur[]>;

  constructor(private tracteurService: TracteurService, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router){}

  ngOnInit(): void {
    this.tracteurs$ = this.tracteurService.get();
  }

  fetchData() {
    this.tracteurs$ = this.tracteurService.get();
  }
}
