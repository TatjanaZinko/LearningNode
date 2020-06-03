import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/data-source.service';
import { CartService } from '../cart/cart.service';
import { Product } from 'src/app/product.model';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public productList: Product[] = [];
  public categoryList: string[] = [];
  public currentCategory: string | null = null;



  constructor( private dataSourceService: DataSourceService, 
               private cartService: CartService,
               private router: Router ) { }

  ngOnInit(): void {
    this.dataSourceService.getProducts().subscribe((list) => {
      this.productList = list;
       this.categoryList = list
        .map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) === index )
        .sort();
    })
  }

  // public setCategory(category: string | null) {
  //   this.currentCategory = category;

  // }

public filterCategory(category: string): Product[] {  
  this.getProducts();
  this.productList = this.productList.filter((product) => product.category === category );
  console.log(this.productList);
  return this.productList;
}

public getProducts(): Product[] {
  this.dataSourceService.getProducts().subscribe((list) => {
    this.productList = list;       
  })
  return this.productList; 
}

public addToCart(product: Product) {
  this.cartService.addCartLine(product);
  this.router.navigate(['/cart']);  
}

}
