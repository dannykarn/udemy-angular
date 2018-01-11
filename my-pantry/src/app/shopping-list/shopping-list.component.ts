import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListEdit } from '../shared/shopping-list-edit.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('Apple', 5),
  new Ingredient('Tomato', 10)];

  constructor() { }

  ngOnInit() {
  }

  onShoppingListEdit(shoppingListEdit: ShoppingListEdit) {
    if (shoppingListEdit.isAdd()) {
      this.addIngredient(shoppingListEdit.ingredient);
    } else if (shoppingListEdit.isDelete()) {
      this.deleteIngredient(shoppingListEdit.ingredient);
    } else if (shoppingListEdit.isClear()) {
      this.clearIngredients();
    }
  }

  addIngredient(ingredient: Ingredient) {
    var foundIngredient = this.findIngredient(ingredient);

    if (foundIngredient == null) {
      this.ingredients.push(ingredient);
    } else {
      foundIngredient.amount += ingredient.amount;
    }
  }

  deleteIngredient(ingredient: Ingredient) {
    var foundIngredient = this.findIngredient(ingredient);

    if (foundIngredient != null) {
      foundIngredient.amount -= ingredient.amount;

      if (foundIngredient.amount === 0) {
        this.removeIngredient(foundIngredient);
      }
    }
  }

  clearIngredients() {
    this.ingredients.splice(0);
  }

  findIngredient(ingredient: Ingredient) {
    return this.ingredients.find(i => ingredient.name === i.name);
  }

  removeIngredient(ingredient: Ingredient) {
    this.ingredients = this.ingredients.filter(i => ingredient.name !== i.name);
    console.log(this.ingredients);
  }

}
