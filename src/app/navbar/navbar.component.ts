import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  public cart: Cart;

  constructor(
    private cartService: CartService
  ){ }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();   // This logic should be shared between components
  }

}
