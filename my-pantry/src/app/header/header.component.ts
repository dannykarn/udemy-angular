import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() headerClickEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onRecipesClick() {
    this.headerClickEvent.emit('recipes');
  }

  onShoppingListClick() {
    this.headerClickEvent.emit('shopping-list');
  }

}
