import { Component, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListEdit } from '../../shared/shopping-list-edit.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput;
  @ViewChild('amountInput') amountInput;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd() {
    if (this.areMandatoryInputsProvided()) {
      this.shoppingListService.addIngredient(new Ingredient(this.nameInput.nativeElement.value,
        parseInt(this.amountInput.nativeElement.value)));
    }
  }

  onDelete() {
    if (this.areMandatoryInputsProvided()) {
      this.shoppingListService.deleteIngredient(new Ingredient(this.nameInput.nativeElement.value,
        parseInt(this.amountInput.nativeElement.value)));
    }
  }

  onClear() {
    this.shoppingListService.clearIngredients();
  }

  areMandatoryInputsProvided() {
    return this.nameInput.nativeElement.value && this.amountInput.nativeElement.value;
  }

}
