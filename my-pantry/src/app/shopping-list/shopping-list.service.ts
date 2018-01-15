import { EventEmitter } from '@angular/core';

import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredients: Ingredient[]) {
        for (let ingredient of ingredients) {
            this.addIngredient(ingredient);
        }
        // this.ingredients.push(...ingredients);

        this.ingredientsChanged.emit(this.getIngredients());
    }

    addIngredient(ingredient: Ingredient) {
        var foundIngredient = this.findIngredient(ingredient);

        if (foundIngredient == null) {
            this.ingredients.push(ingredient);
        } else {
            foundIngredient.amount += ingredient.amount;
        }

        this.ingredientsChanged.emit(this.getIngredients());
    }

    deleteIngredient(ingredient: Ingredient) {
        var foundIngredient = this.findIngredient(ingredient);

        if (foundIngredient != null) {
            foundIngredient.amount -= ingredient.amount;

            if (foundIngredient.amount <= 0) {
                this.removeIngredient(foundIngredient);
            }
        }

        this.ingredientsChanged.emit(this.getIngredients());
    }

    clearIngredients() {
        this.ingredients.splice(0);

        this.ingredientsChanged.emit(this.getIngredients());
    }

    private findIngredient(ingredient: Ingredient) {
        return this.ingredients.find(i => ingredient.name === i.name);
    }

    private removeIngredient(ingredient: Ingredient) {
        this.ingredients = this.ingredients.filter(i => ingredient.name !== i.name);
        console.log(this.ingredients);
    }

}