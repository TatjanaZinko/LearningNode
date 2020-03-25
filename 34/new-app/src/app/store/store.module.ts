import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreRoutingModule } from './store-routing.module';



@NgModule({
  declarations: [StoreComponent, CartComponent, CheckoutComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  exports: [StoreComponent, CartComponent]
})
export class StoreModule { }
