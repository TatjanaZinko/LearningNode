import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book/book.component';
import { TableHostComponent } from './table-host/table-host.component';


const routes: Routes = [
    { path: 'book', component: BookComponent },
    { path: 'table', component: TableHostComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}