import {Component} from '@angular/core';
import {Product} from "../product/product.model";
import {moveItemInArray} from "@angular/cdk/drag-drop";


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


  addProduct(product: Product): void {
    this.products.push(product);
    moveItemInArray(this.products, this.products.indexOf(product), 0);
  }

}
