import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {Product} from "../product/product.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() {
  }

  @Output()
  public productAdded: EventEmitter<Product> = new EventEmitter<Product>();

  @Input()
  products: Product[];

  ngOnInit() {
  }

  drop(event: CdkDragDrop<Product[]>) {
    moveItemInArray(this.products, event.previousIndex, event.currentIndex);
  }

  addProduct(product: Product): void {
    this.products.push(product);
    moveItemInArray(this.products, this.products.indexOf(product), 0);
  }

  deleteProduct(product: Product): void {
    this.products.splice(this.products.indexOf(product), 1);
  }

  reSortProduct(product: Product): void {
    const targetPosition = product.complete ? this.products.length : 0;
    moveItemInArray(this.products, this.products.indexOf(product), targetPosition)
  }

}
