import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-display-logs',
  templateUrl: './detail-display-logs.component.html',
  styleUrls: ['./detail-display-logs.component.css']
})
export class DetailDisplayLogsComponent implements OnInit {
  logs = [];

  constructor() { }

  ngOnInit() {
  }

}
