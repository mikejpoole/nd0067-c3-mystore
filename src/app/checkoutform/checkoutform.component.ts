import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Cart } from '../models/cart.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-checkoutform',
  templateUrl: './checkoutform.component.html'
})
export class CheckoutformComponent implements OnInit {
  @Input() cart: Cart;
  @Output() cartEvent = new EventEmitter<Cart>();

  public form: FormGroup;
  public user: User;

  ngOnInit(): void {
    console.log(this.cart);
    if (this.cart.customer) { this.user = this.cart.customer; }

    this.form = new FormGroup({
      firstname: new FormControl(this.user.firstname, [Validators.required, Validators.minLength(2)]),
      surname: new FormControl(this.user.surname, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(this.user.email, [Validators.required]),
      addressLine1: new FormControl(this.user.addressLine1, [Validators.required]),
      addressLine2: new FormControl(this.user.addressLine2),
      addressLine3: new FormControl(this.user.addressLine3),
      town: new FormControl(this.user.town, [Validators.required]),
      region: new FormControl(this.user.region),
      postcode: new FormControl(this.user.postcode, [Validators.required])
    });
  }

  checkout(): void{
    console.log('Checking out...', this.form.value.firstname);

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

      this.cartEvent.emit(this.cart);
    }
  }
}
