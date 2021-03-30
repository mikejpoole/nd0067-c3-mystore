import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../services/cart.service';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  productId: number;
  product: Product;
  form: FormGroup;

  constructor(
    public cartService: CartService,
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {
    this.form = new FormGroup({
      quantity: new FormControl()
    });
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
      this.getProduct();
    });
  }

  getProduct(): void {
    this.productService.getProducts().subscribe((res) => (
      this.product = res[this.productId - 1]
    ));
  }

  addToCart(): void {
    // console.log('Adding to cart');
    // console.log(this.form);

    const quantity: number = +this.form.value.quantity;
    // console.log(quantity);
    this.cartService.addProductToCart(this.product, quantity);
  }
}
