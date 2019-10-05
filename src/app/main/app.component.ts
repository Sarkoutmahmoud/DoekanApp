import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {Component} from '@angular/core';
import {Product} from "../product/product.model";
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

  constructor() {
  }



  drop(event: CdkDragDrop<Product[]>) {
    moveItemInArray(this.products, event.previousIndex, event.currentIndex);
  }

  addProduct(product : Product) : void {
    this.products.push(product);
    moveItemInArray(this.products, this.products.indexOf(product), 0);
  }

  deleteProduct(product: Product) : void {
    this.products.splice(this.products.indexOf(product), 1);
  }

  reSortProduct(product: Product): void {
    const targetPosition = product.complete ? this.products.length : 0;
    moveItemInArray(this.products, this.products.indexOf(product), targetPosition)
  }
}
