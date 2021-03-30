import { Component, OnInit } from '@angular/core';

import { CartService } from '../services/cart.service';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html'
})
export class BrowseComponent implements OnInit {

  products: Product[] = [
    // {id: 1, name: 'Foo', price: 5.99},
    // {id: 2, name: 'Bar', price: 7.99}
  ];

  constructor(
    public cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      // console.log(this.products);
    });
  }
}
