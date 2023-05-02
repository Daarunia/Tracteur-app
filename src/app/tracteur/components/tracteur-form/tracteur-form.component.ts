import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Tracteur } from '../../models/tracteur';
import { TracteurService } from '../../services/tracteur.service';
import { MarqueService } from 'src/app/marque/services/marque.service';
import { Marque } from 'src/app/marque/models/marque';

export interface TracteurFormData {
  isCreateForm: boolean;
  student: Tracteur;
}

@Component({
  selector: 'app-tracteur-form',
  templateUrl: './tracteur-form.component.html',
  styleUrls: ['./tracteur-form.component.sass']
})

export class TracteurFormComponent {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  marques$: Observable<Marque[]>;

  tracteurForm = this.fb.group({
    id: [0, [Validators.required]],
    model: ['', [Validators.required]],
    power: ['', [Validators.required]],
    liftingCapacity: ['', [Validators.required]],
    weight: [0, [Validators.email]],
    releaseDate: ['', [Validators.required]],
    marque: ['', [Validators.required]]
  });

  constructor(public dialogRef: MatDialogRef<TracteurFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TracteurFormData, private fb: FormBuilder,
    private tracteurService : TracteurService, private _snackBar: MatSnackBar, private marqueService: MarqueService) {

      if(!data.isCreateForm){
        this.setTracteurForm(data.student);
      }

  }

  ngOnInit(): void {
    this.marques$ = this.marqueService.get();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  setTracteurForm(tracteur: Tracteur) {
    this.tracteurForm.setValue({
      id: tracteur.id,
      model: tracteur.model,
      power: tracteur.power,
      liftingCapacity: tracteur.liftingCapacity,
      weight: tracteur.weight,
      releaseDate: tracteur.releaseDate,
      marque: tracteur.marque
    });
  }

  get title(){
    if(this.data.isCreateForm){
      return 'Formulaire de création';
    }
    return 'Formulaire de modification';
  }

  get submitBtnName(){
    if(this.data.isCreateForm){
      return 'Ajouter';
    }
    return 'Modifier';
  }

  onSubmit(){
    if(this.tracteurForm.valid){
      this.tracteurForm.value.releaseDate = new Date(this.tracteurForm.value.releaseDate).toISOString();
      if(this.data.isCreateForm){
        this.tracteurForm.value.id = Date.now() + Math.random();
        this.tracteurService.create(this.tracteurForm.value as Tracteur)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });

          this.dialogRef.close(true);
        });
      }else{
        this.tracteurService.update(this.tracteurForm.value as Tracteur)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });
          this.dialogRef.close(true);
        });
      }
    }
  }
}
