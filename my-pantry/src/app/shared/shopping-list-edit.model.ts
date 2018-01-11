import { Ingredient } from './ingredient.model';

export class ShoppingListEdit {
    type: string;
    ingredient: Ingredient;

    constructor(type: string, ingredient: Ingredient) {
        this.type = type;
        this.ingredient = ingredient;
    }

    isAdd() {
        return this.type === 'add';
    }

    isDelete() {
        return this.type === 'delete';
    }

    isClear() {
        return this.type === 'clear';
    }

}