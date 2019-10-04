import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {Component} from '@angular/core';
import {Product} from "../model/Product/product";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'Angular';

  products: Product[] = [{
    quantity: 2,
    productName: 'bananen',
    complete: false
  },
    {
      quantity: 3,
      productName: 'apple',
      complete: false
    },
    {
      quantity: 4,
      productName: 'peer',
      complete: false
    }];

  newProduct: Product = new Product();

  constructor() {
  }

  drop(event: CdkDragDrop<Product[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
