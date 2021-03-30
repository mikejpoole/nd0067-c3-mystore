import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(
    private http: HttpClient
  ) {}

  getProducts(): Observable<Product[]>{
    // console.log('Getting products');
    return this.http.get<Product[]>('../assets/data.json');
  }
}
