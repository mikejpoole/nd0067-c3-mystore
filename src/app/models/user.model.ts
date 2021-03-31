import { Injectable } from '@angular/core';

export interface User {
    firstname: string;
    surname: string;
    email: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    town: string;
    region: string;
    postcode: string;
}
