import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartDetailComponent } from './pages/cart-detail/cart-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CheckoutComponent,
    CartDetailComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class CartModule { }
