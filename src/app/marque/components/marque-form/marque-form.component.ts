import { Component, Inject } from '@angular/core';
import { Marque } from '../../models/marque';
import { Observable, Subject, takeUntil } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MarqueService } from '../../services/marque.service';

export interface MarqueFormData {
  isCreateForm: boolean;
  marque: Marque;
}

@Component({
  selector: 'app-marque-form',
  templateUrl: './marque-form.component.html',
  styleUrls: ['./marque-form.component.sass']
})

export class MarqueFormComponent {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  marqueForm = this.fb.group({
    id: [0, [Validators.required]],
    name: ['', [Validators.required]],
    releaseDate: ['', [Validators.required]],
  });

  constructor(
    public dialogRef: MatDialogRef<MarqueFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MarqueFormData,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private marqueService: MarqueService
  ) {
    if (!data.isCreateForm) {
      this.setMarqueForm(data.marque);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  setMarqueForm(marque: Marque) {
    this.marqueForm.setValue({
      id: marque.id,
      name: marque.name,
      releaseDate: marque.releaseDate,
    });
  }

  get title() {
    if (this.data.isCreateForm) {
      return 'Formulaire de création';
    }
    return 'Formulaire de modification';
  }

  get submitBtnName() {
    if (this.data.isCreateForm) {
      return 'Ajouter';
    }
    return 'Modifier';
  }

  onSubmit() {
    if (this.marqueForm.valid) {
      const releaseDate = new Date(this.marqueForm.value.releaseDate);
      releaseDate.setDate(releaseDate.getDate() + 1);
      this.marqueForm.value.releaseDate = releaseDate.toISOString();
      if (this.data.isCreateForm) {
        this.marqueForm.value.id = Date.now() + Math.random();
        this.marqueService
          .create(this.marqueForm.value as Marque)
          .pipe(takeUntil(this.destroy$))
          .subscribe((result) => {
            this._snackBar.open(result, '', {
              duration: 2000,
              panelClass: ['bg-success'],
            });

            this.dialogRef.close(true);
          });
      } else {
        this.marqueService
          .update(this.marqueForm.value as Marque)
          .pipe(takeUntil(this.destroy$))
          .subscribe((result) => {
            this._snackBar.open(result, '', {
              duration: 2000,
              panelClass: ['bg-success'],
            });
            this.dialogRef.close(true);
          });
      }
    }
  }
}
