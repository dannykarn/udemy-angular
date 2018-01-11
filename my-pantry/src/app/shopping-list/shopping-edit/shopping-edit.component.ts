import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListEdit } from '../../shared/shopping-list-edit.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput;
  @ViewChild('amountInput') amountInput;
  @Output() shoppingListEdited = new EventEmitter<ShoppingListEdit>();

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    if (this.areMandatoryInputsProvided()) {
      this.shoppingListEdited.emit(
        new ShoppingListEdit('add',
          new Ingredient(this.nameInput.nativeElement.value,
            parseInt(this.amountInput.nativeElement.value)))
      );
    }
  }

  onDelete() {
    if (this.areMandatoryInputsProvided()) {
      this.shoppingListEdited.emit(
        new ShoppingListEdit('delete',
          new Ingredient(this.nameInput.nativeElement.value,
            parseInt(this.amountInput.nativeElement.value)))
      );
    }
  }

  onClear() {
    this.shoppingListEdited.emit(
      new ShoppingListEdit('clear',
        null)
    );
  }

  areMandatoryInputsProvided() {
    return this.nameInput.nativeElement.value && this.amountInput.nativeElement.value;
  }

}
