import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  public cart: Cart;

  constructor(
    public cartService: CartService
  ){ }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }
}
