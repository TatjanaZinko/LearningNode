import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreRoutingModule } from './store-routing.module';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartSummaryComponent } from './header/cart-summary/cart-summary.component';



@NgModule({
  declarations: [StoreComponent, CartComponent, CheckoutComponent, HeaderComponent, CartSummaryComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [StoreComponent, CartComponent]
})
export class StoreModule { }
