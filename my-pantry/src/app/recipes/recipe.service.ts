import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe #1', 'This is the description of the first test recipe.',
            'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
            [new Ingredient('Salmon', 1), new Ingredient('Dill', 10), new Ingredient('Lemon', 1)]),
        new Recipe('Test Recipe #2', 'This is the description of the second test recipe.',
            'http://www.seriouseats.com/images/2017/09/20170919-stir-fry-recipes-roundup-02.jpg',
            [new Ingredient('Noodles', 1), new Ingredient('Soy Sauce', 300), new Ingredient('Green Onion', 333),
            new Ingredient('Mushrooms', 123)])
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}