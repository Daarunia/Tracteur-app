import { Component } from '@angular/core';
import { Marque } from '../../models/marque';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MarqueService } from '../../services/marque.service';

@Component({
  selector: 'app-marque-list',
  templateUrl: './marque-list.component.html',
  styleUrls: ['./marque-list.component.sass']
})
export class MarqueListComponent {
  marques$: Observable<Marque[]>;

  constructor(private marqueService: MarqueService, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router){}

  ngOnInit(): void {
    this.marques$ = this.marqueService.get();
  }

  fetchData() {
    this.marques$ = this.marqueService.get();
  }
}
