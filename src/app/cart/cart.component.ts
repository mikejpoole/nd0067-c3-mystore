import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';

import { Product } from '../models/product.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {
  public cart: Cart;
  public items: Product[];
  public user: User;
  public form: FormGroup;
  public orderComplete: boolean;
  public totalPrice: number;

  constructor(
    public cartService: CartService,

    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('status') === 'success' ) {
        this.orderComplete = true;
      }
    });

    this.cart = this.cartService.getCart();
    this.items = this.cart.products;
    this.totalPrice = this.cart.totalPrice;
    if (this.cart.customer) { this.user = this.cart.customer; }

    if (!this.orderComplete) {

    }

    if (this.orderComplete) {
      this.cart = this.cartService.getEmptyCart();
    }
  }
}
