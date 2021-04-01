import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { Cart, ActiveCart } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart: Cart = new ActiveCart();

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  getProducts(): Observable<Product[]>{
    // console.log('Getting products');
    return this.http.get<Product[]>('../assets/data.json');
  }

  getCart(): Cart {
    return this.cart;
  }

  addProductToCart(product: Product, quantity: number): void{
    // console.log('Adding', quantity, 'of', product.name, 'to cart');
    product.quantity = quantity;
    product.totalPrice = product.price * quantity;
    this.cart.products.push(product);
    this.cart.totalQuantity += quantity;
    this.cart.totalPrice += product.totalPrice;

    let message = '';

    if (quantity > 1) {
      message = quantity + ' ' + product.name + 's have been added to your cart.';
    } else {
      message = 'A ' + product.name + ' has been added to your cart.';
    }

    this.toastr.success(message);
  }

  removeProductFromCart(index: number): void{
    console.log('Removing', index, 'from cart');
    const item = this.cart.products[index];

    // Reduce total price and quantity
    if (item.totalPrice) { this.cart.totalPrice -= item.totalPrice; }
    if (item.quantity) { this.cart.totalQuantity -= item.quantity; }

    this.toastr.success('The ' + item.name + ' has been removed from your cart.');

    this.cart.products.splice(index, 1);
  }

  getEmptyCart(): Cart {
    console.log('Emptying the cart...');
    this.cart = new ActiveCart();
    return this.cart;
  }
}
