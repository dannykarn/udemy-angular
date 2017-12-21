import { Component } from '@angular/core';

/**
 * Either styleUrl or styles is necessary for the @Component decoration.
 * styleUrl refers to a css file, whereas, styles is a css string.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
  h3 {
    color: dodgerblue;
  }
  `]
})
export class AppComponent {
  title = 'app';
}
