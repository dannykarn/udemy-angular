import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {
  @Input() newNumber: number;
  currentValue: string = 'odd number not yet received';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.isZero(this.newNumber)) {
      this.currentValue = 'odd number not yet received';
    } else if (this.isOddNumber(this.newNumber)) {
      this.currentValue = this.newNumber.toString();
    }
  }

  isOddNumber(num: number) {
    return num % 2 === 1;
  }

  isZero(num: number) {
    return num === 0;
  }

}
