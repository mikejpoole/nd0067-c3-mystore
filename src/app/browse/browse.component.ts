import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html'
})
export class BrowseComponent implements OnInit {
  products: Product[] = [];
  addItemForm: FormGroup;

  constructor(
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(products => {
      this.products = products;
    });

    this.addItemForm = new FormGroup({
      product: new FormControl(),
      quantity: new FormControl()
    });
  }

  addToCart(product: Product): void {
    this.cartService.addProductToCart(product, +this.addItemForm.value.quantity);
  }
}
