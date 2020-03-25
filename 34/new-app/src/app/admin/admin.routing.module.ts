import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductFormComponent } from './product-form/product-form.component';


const routes: Routes = [
  { 
      path: 'admin', 
      component: AdminComponent, 
      children: [
        { 
            path: 'login', 
            component: LoginComponent,
        },
        { 
            path: 'home', 
            component: HomeComponent,
            children: [
                {
                    path: 'product',
                    component: ProductComponent,
                },
                {
                    path: 'orders',
                    component: OrdersComponent,
                },
                {
                    path: 'product/:mode/:id',
                    component: ProductFormComponent,
                },
            ]
        },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
