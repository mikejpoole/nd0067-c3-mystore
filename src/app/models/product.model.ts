import { Injectable } from '@angular/core';

export interface Product {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    quantity?: number;
    totalPrice?: number;
}
