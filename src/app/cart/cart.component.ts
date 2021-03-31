import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
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
      this.form = new FormGroup({
        firstname: new FormControl(this.user.firstname, [Validators.required]),
        surname: new FormControl(this.user.surname, [Validators.required]),
        email: new FormControl(this.user.email, [Validators.required]),
        addressLine1: new FormControl(this.user.addressLine1, [Validators.required]),
        addressLine2: new FormControl(this.user.addressLine2),
        addressLine3: new FormControl(this.user.addressLine3),
        town: new FormControl(this.user.town, [Validators.required]),
        region: new FormControl(this.user.region),
        postcode: new FormControl(this.user.postcode, [Validators.required])
      });
    }

    if (this.orderComplete) {
      this.cart = this.cartService.getEmptyCart();
    }
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

      this.router.navigate(['/cart/success']);
    }
  }
}
