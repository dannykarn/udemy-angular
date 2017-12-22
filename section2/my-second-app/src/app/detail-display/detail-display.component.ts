import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-display',
  templateUrl: './detail-display.component.html',
  styleUrls: ['./detail-display.component.css']
})
export class DetailDisplayComponent implements OnInit {
  displayDetails = false;
  logs = [];

  constructor() {
    this.displayDetails = this.displayDetails;
  }

  ngOnInit() {
  }

  onDisplayDetailsClick() {
    this.displayDetails = !this.displayDetails;
    this.logs.push(this.logs.length + 1);
  }

  getTimestamp() {
    return new Date();
  }

}
