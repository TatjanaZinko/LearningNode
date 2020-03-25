import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { TableHostComponent } from './table-host/table-host.component';
import { RouterPrimerComponent } from './router-primer/router-primer.component';
import { ProductDetailedComponent } from './product-detailed/product-detailed.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full'},
  { path: 'book', component: BookComponent, canActivate: [AuthGuard] },
  { path: 'table', component: TableHostComponent },
  { 
    path: 'product', 
    component: RouterPrimerComponent, 
    children: [
      { path: '', redirectTo: '1', pathMatch: 'full'},
      { path: ':id', component: ProductDetailedComponent }
    ] },
  { path: '**', component: BookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
