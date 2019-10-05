import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../product/product.model";

@Component({
  selector: 'app-product-creator',
  templateUrl: './product-creator.component.html',
  styleUrls: ['./product-creator.component.css']
})
export class ProductCreatorComponent implements OnInit {

  @Input()
  products: Product[];

  @Output()
  public productAdded: EventEmitter<Product> = new EventEmitter<Product>();


  constructor() {
  }

  productForm: FormGroup;

  ngOnInit() {
    this.productForm = new FormGroup({
      quantity: new FormControl(null, [Validators.required]),
      productName: new FormControl(null, [Validators.required])
    });
  }

  public addProduct(): void {
    if (this.productForm.invalid){
      return;
    }
    const product: Product = {
      quantity: this.productForm.controls.quantity.value,
      productName: this.productForm.controls.productName.value,
      complete: false
    };
    this.productAdded.emit(product);
  }


}
