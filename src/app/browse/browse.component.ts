import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html'
})
export class BrowseComponent implements OnInit {
  products: Product[] = [];

  constructor(
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(products => {
      this.products = products;
      // console.log(this.products);
    });
  }
}
