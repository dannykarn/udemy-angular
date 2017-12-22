import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-display-log',
  templateUrl: './detail-display-log.component.html',
  styleUrls: ['./detail-display-log.component.css']
})
export class DetailDisplayLogComponent implements OnInit {
  logInfo = '';

  constructor() {
    this.logInfo = Date.now().toString();
  }

  ngOnInit() {
  }

  getBackgroundColor() {
    return 'blue';
  }

}
