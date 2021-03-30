import { Component, OnInit } from '@angular/core';

import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {
  public cart: Cart;
  public items: Product[];

  constructor(
    public cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.items = this.cart.products;
  }

}
