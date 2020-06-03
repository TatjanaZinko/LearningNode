import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FirstLoadGuard } from './first-load.guard';


const routes: Routes = [
  { path: 'store', component: StoreComponent, canActivate: [FirstLoadGuard] },
  { path: 'cart', component: CartComponent, canActivate: [FirstLoadGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [FirstLoadGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
