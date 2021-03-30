import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

export interface Cart {
    products: Product[];
    totalQuantity: number;
    totalPrice: number;
}

export class ActiveCart implements Cart {
    products: Product[] = [];
    totalQuantity = 0;
    totalPrice = 0;
}
