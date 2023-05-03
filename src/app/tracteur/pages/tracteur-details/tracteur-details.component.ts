import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tracteur } from '../../models/tracteur';
import { TracteurService } from '../../services/tracteur.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tracteur-details',
  templateUrl: './tracteur-details.component.html',
  styleUrls: ['./tracteur-details.component.sass']
})
export class TracteurDetailsComponent {
  tracteurtId: number;
  tracteur$: Observable<Tracteur>;

  constructor(private route: ActivatedRoute, private tracteurService: TracteurService, private location: Location){
    this.tracteurtId = +this.route.snapshot.paramMap.get('id') ;
  }

  ngOnInit(): void {
    if(this.tracteurtId){
      this.tracteur$ = this.tracteurService.getById(this.tracteurtId);
    }
  }

  goBack(){
    this.location.back();
  }
}
