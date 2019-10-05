import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "./product.model";

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

  @Output()
  public removedEvent : EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {
  }

  public toggleProduct(): void {
    this.product.complete = !this.product.complete;
    this.clickedEvent.emit(this.product);
  }


  removeProduct() : void {
    this.removedEvent.emit(this.product);
  }
}
