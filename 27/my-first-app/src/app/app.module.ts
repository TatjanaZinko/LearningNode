import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { BookComponent } from './book/book.component';
import { ChupterComponent } from './book/chupter/chupter.component';
import { TableHostComponent } from './table-host/table-host.component';
import { MyTableComponent } from './table-host/my-table/my-table.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FormComponent } from './table-host/form/form.component';
import { MyListComponent } from './table-host/my-list/my-list.component';
import { RouterPrimerComponent } from './router-primer/router-primer.component';
import { ProductDetailedComponent } from './product-detailed/product-detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    BookComponent,
    ChupterComponent,
    TableHostComponent,
    MyTableComponent,
    FormComponent,
    MyListComponent,
    RouterPrimerComponent,
    ProductDetailedComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
