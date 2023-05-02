import { Component } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Tracteur } from '../../models/tracteur';
import { TracteurService } from '../../services/tracteur.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { TracteurFormComponent } from '../../components/tracteur-form/tracteur-form.component';

@Component({
  selector: 'app-tracteur-list',
  templateUrl: './tracteur-list.component.html',
  styleUrls: ['./tracteur-list.component.sass'],
})
export class TracteurListComponent {
  displayedColumns: string[] = [
    'model',
    'power',
    'liftingCapacity',
    'weight',
    'releaseDate',
    'marqueName',
    'update',
    'delete',
  ];
  tracteurs$: Observable<Tracteur[]>;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private tracteurService: TracteurService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tracteurs$ = this.tracteurService.get();
  }

  fetchData() {
    this.tracteurs$ = this.tracteurService.get();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  delete(id: number) {
    const ref = this.dialog.open(GenericPopupComponent, {
      data: {
        title: 'Confirmation de suppression',
        message: 'êtes-vous sûr de vouloir supprimer ce tracteur ?',
        typeMessage: 'none',
        yesButtonVisible: true,
        noButtonVisible: true,
        cancelButtonVisible: false,
        defaultButton: 'No',
        yesButtonLabel: 'Oui',
        noButtonLabel: 'Non',
      },
    });

    ref
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          this.tracteurService
            .delete(id)
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
              this._snackBar.open(result, '', {
                duration: 2000,
                panelClass: ['bg-success'],
              });
              this.fetchData();
            });
        }
      });
  }

  openTracteurForm(tracteur?: Tracteur) {
    console.log(tracteur);
    const dialogRef = this.dialog.open(TracteurFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: tracteur ? false : true,
        tracteur: tracteur ? tracteur : undefined,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          this.fetchData();
        }
      });
  }
}
