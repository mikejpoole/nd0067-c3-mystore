import { Injectable } from '@angular/core';

import { Cart, ActiveCart } from '../models/cart.model';
import { Product } from '../models/product.model';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart: Cart = new ActiveCart();

  constructor(
    private toastr: ToastrService
  ) {}

  getCart(): Cart {
    console.log('Getting the cart', this.cart);
    return this.cart;
  }

  addProductToCart(product: Product, quantity: number): Cart{
    console.log('Adding', quantity, 'of', product.name, 'to cart');
    product.quantity = quantity;
    product.totalPrice = product.price * quantity;
    this.cart.products.push(product);
    this.cart.totalQuantity += quantity;
    this.cart.totalPrice += product.totalPrice;

    console.log(this.cart);

    let message = '';

    if (quantity > 1) {
      message = quantity + ' ' + product.name + 's have been added to your cart.';
    } else {
      message = 'A ' + product.name + ' has been added to your cart.';
    }


    this.toastr.success(message);

    return this.cart;
  }

}
