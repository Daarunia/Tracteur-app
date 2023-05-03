import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tracteur } from '../../models/tracteur';

@Component({
  selector: 'app-tracteur-card',
  templateUrl: './tracteur-card.component.html',
  styleUrls: ['./tracteur-card.component.sass']
})
export class TracteurCardComponent {
  @Input() selectedTracteur: Tracteur;
  @Output() received: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
      this.received.emit(true);
  }
}
