import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart.model';
import { User } from '../models/user.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html'
})
export class SuccessComponent implements OnInit {
  public cart: Cart;
  public user: User;

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cart.products.length = 0;
    this.cart.totalQuantity = 0;
    this.cart.totalPrice = 0;
    if (this.cart.customer) { this.user = this.cart.customer; }
  }
}
