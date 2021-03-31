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
      firstname: new FormControl(),
      surname: new FormControl(),
      email: new FormControl(),
      addressLine1: new FormControl(),
      addressLine2: new FormControl(),
      addressLine3: new FormControl(),
      town: new FormControl(),
      region: new FormControl(),
      postcode: new FormControl()
    });
   }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.items = this.cart.products;
  }

  checkout(): void{
    // console.log('Checking out...', this.form.value.firstname);

    if (this.cart.customer) {
      this.cart.customer.firstname    = this.form.value.firstname;
      this.cart.customer.surname      = this.form.value.surname;
      this.cart.customer.email        = this.form.value.email;
      this.cart.customer.addressLine1 = this.form.value.addressLine1;
      this.cart.customer.addressLine2 = this.form.value.addressLine2;
      this.cart.customer.addressLine3 = this.form.value.addressLine3;
      this.cart.customer.town         = this.form.value.town;
      this.cart.customer.region       = this.form.value.region;
      this.cart.customer.postcode     = this.form.value.postcode;

      console.log(this.cart.customer);
    }
  }

}
