import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Marque } from '../../models/marque';

@Component({
  selector: 'app-marque-card',
  templateUrl: './marque-card.component.html',
  styleUrls: ['./marque-card.component.sass']
})
export class MarqueCardComponent {
  @Input() selectedMarque: Marque;
  @Output() received: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
      this.received.emit(true);
  }
}
