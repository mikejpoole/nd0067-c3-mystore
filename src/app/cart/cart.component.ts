import { Component, OnInit } from '@angular/core';

import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {
  public cart: Cart;
  public items: Product[];
  form: FormGroup;

  constructor(
    public cartService: CartService,
    private productService: ProductService
  ) {
    this.form = new FormGroup({
      firstname: new FormControl()
    });
   }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.items = this.cart.products;
  }

  checkout(): void{
    console.log('Checking out...');
  }

}
