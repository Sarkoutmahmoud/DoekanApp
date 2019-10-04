import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../model/Product/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  product: Product;

  @Output()
  public clickedEvent : EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {
  }

  public toggleProduct(): void {
    this.product.complete = !this.product.complete;
    this.clickedEvent.emit(this.product);
  }



}
