import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emittedEventNumbers: number[] = [];
  currentNumber: number = 0;

  constructor() { }

  handleGameComponentEvent() {
    this.currentNumber++;
    this.emittedEventNumbers.push(this.currentNumber);
  }

  isCurrentNumberEvenAndNotZero() {
    return this.currentNumber % 2 == 0 && !this.isCurrentNumberZero();
  }

  isCurrentNumberOddAndNotZero() {
    return this.currentNumber % 2 == 1 && !this.isCurrentNumberZero();
  }

  isCurrentNumberZero() {
    return this.currentNumber == 0;
  }

}
