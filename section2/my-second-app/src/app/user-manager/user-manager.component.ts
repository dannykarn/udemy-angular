import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {
  name = '';

  constructor() { }

  ngOnInit() {
  }

  isNameEmpty() {
    return name == '';
  }

  clearName() {
    this.name = '';
  }

}
