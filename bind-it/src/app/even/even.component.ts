import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() newNumber: number;
  currentValue: string = 'even number not yet received';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.isZero(this.newNumber)) {
      this.currentValue = 'odd number not yet received';
    } else if (this.isEvenNumber(this.newNumber)) {
      this.currentValue = this.newNumber.toString();
    }
  }

  isEvenNumber(num: number) {
    return num % 2 === 0;
  }

  isZero(num: number) {
    return num === 0;
  }

}
