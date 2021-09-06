import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailComponent } from './pages/cart-detail/cart-detail.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'cart-detail', component: CartDetailComponent},
      { path: 'checkout', component: CheckoutComponent },
      { path: '**', component: CartDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
