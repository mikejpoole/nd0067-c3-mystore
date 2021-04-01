import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {
  productId: number;
  product: Product;
  addItemForm: FormGroup;

  constructor(
    public cartService: CartService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
      this.getProduct();
    });

    this.addItemForm = new FormGroup({
      quantity: new FormControl()
    });
  }

  getProduct(): void {
    this.cartService.getProducts().subscribe((res) => (
      this.product = res[this.productId - 1]
    ));
  }

  addToCart(): void {
    this.cartService.addProductToCart(this.product, +this.addItemForm.value.quantity);
  }
}
