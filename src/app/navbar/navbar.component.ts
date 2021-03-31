import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  // public cart: Cart;
  @Input() totalQuantity: any;

  constructor(
  ){ }

  ngOnInit(): void {
    // this.cart = this.cartService.getCart();   // Removed because using @Input decorator to get from parent instead
  }

}
