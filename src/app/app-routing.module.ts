import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path: '', component: BrowseComponent},
  {path: 'cart', component: CartComponent},
  {path: 'cart/:status', component: SuccessComponent},
  {path: 'product/:id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
