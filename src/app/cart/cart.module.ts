import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartDetailComponent } from './pages/cart-detail/cart-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [
    CheckoutComponent,
    CartDetailComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatDividerModule
  ]
})
export class CartModule { }
