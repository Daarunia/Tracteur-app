import { Component } from '@angular/core';
import { Marque } from '../../models/marque';
import { Observable, Subject, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MarqueService } from '../../services/marque.service';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { MarqueFormComponent } from '../../components/marque-form/marque-form.component';

@Component({
  selector: 'app-marque-list',
  templateUrl: './marque-list.component.html',
  styleUrls: ['./marque-list.component.sass']
})
export class MarqueListComponent {
  displayedColumns: string[] = [
    'name',
    'releaseDate',
    'update',
    'delete',
  ];
  marques$: Observable<Marque[]>;
  private destroy$: Subject<boolean> = new Subject<boolean>();


  constructor(private marqueService: MarqueService, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router){}

  ngOnInit(): void {
    this.marques$ = this.marqueService.get();
  }

  fetchData() {
    this.marques$ = this.marqueService.get();
  }

  delete(id: number) {
    const ref = this.dialog.open(GenericPopupComponent, {
      data: {
        title: 'Confirmation de suppression',
        message: 'êtes-vous sûr de vouloir supprimer cette marque ?',
        typeMessage: 'none',
        yesButtonVisible: true,
        noButtonVisible: true,
        cancelButtonVisible: false,
        defaultButton: 'No',
        yesButtonLabel: 'Oui',
        noButtonLabel: 'Non',
      },
    })

    ref.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.marqueService.delete(id)
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
              this._snackBar.open(result, '', {
                duration: 2000,
                panelClass: ['bg-success']
              });
              this.fetchData();
            });
        }
      });
  }

  openMarqueForm(marque?: Marque) {
    const dialogRef = this.dialog.open(MarqueFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: marque ? false : true,
        marque: marque ? marque : undefined
      }
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

  showMarqueDetails(marqueId:number){
    this.router.navigate(['/marques/'+marqueId]);
  }
}
