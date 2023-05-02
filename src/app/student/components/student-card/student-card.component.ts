import { Component, Input, Output } from '@angular/core';
import { Student } from '../../models/student';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.sass']
})
export class StudentCardComponent {
  @Input() selectedStudent: Student;
  @Output() received: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
      this.received.emit(true);
  }
}
