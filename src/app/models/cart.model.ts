import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';
import { User } from './user.model';

export interface Cart {
    products: Product[];
    totalQuantity: number;
    totalPrice: number;
    customer?: User;
}

export class ActiveCart implements Cart {
    products: Product[] = [];
    totalQuantity = 0;
    totalPrice = 0;
}
