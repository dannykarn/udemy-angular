import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFeature: string = 'recipes';

  handleHeaderClickEvent(featureId: string) {
    this.selectedFeature = featureId;
  }

  isRecipesPageSelected() {
    return this.selectedFeature === 'recipes';
  }

  isShoppingListPageSelected() {
    return this.selectedFeature === 'shopping-list';
  }

}
