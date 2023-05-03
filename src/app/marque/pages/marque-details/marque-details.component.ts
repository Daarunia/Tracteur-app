import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Marque } from 'src/app/marque/models/marque';
import { MarqueService } from '../../services/marque.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-marque-details',
  templateUrl: './marque-details.component.html',
  styleUrls: ['./marque-details.component.sass']
})
export class MarqueDetailsComponent {
  marqueId: number;
  marque$: Observable<Marque>;

  constructor(private route: ActivatedRoute, private marqueService: MarqueService, private location: Location){
    this.marqueId = +this.route.snapshot.paramMap.get('id') ;
  }

  ngOnInit(): void {
    if(this.marqueId){
      this.marque$ = this.marqueService.getById(this.marqueId);
    }
  }

  goBack(){
    this.location.back();
  }
}
