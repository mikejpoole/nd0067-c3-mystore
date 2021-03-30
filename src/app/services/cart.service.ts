import { Injectable } from '@angular/core';

import { Cart, ActiveCart } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart: Cart = new ActiveCart();

  constructor() {}

  getCart(): Cart {
    console.log('Getting the cart', this.cart);
    return this.cart;
  }

  addProductToCart(product: Product, quantity: number): Cart{
    console.log('Adding', product.name, 'to cart');
    this.cart.products.push(product);
    this.cart.totalQuantity++;
    this.cart.totalPrice += product.price;

    console.log(this.cart);

    return this.cart;
  }

}
