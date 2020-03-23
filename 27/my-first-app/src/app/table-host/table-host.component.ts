import { Component, OnInit } from '@angular/core';

export class Product {
  public id: number;
  public name: string;
  public price: number;
}

const products: Array<Product> = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 100 },
  { id: 3, name: 'Product 3', price: 100 },
  { id: 4, name: 'Product 4', price: 100 },
  { id: 5, name: 'Product 5', price: 100 },
  { id: 6, name: 'Product 6', price: 100 },
  { id: 7, name: 'Product 7', price: 100 },
  { id: 8, name: 'Product 8', price: 100 }
]

@Component({
  selector: 'app-table-host',
  templateUrl: './table-host.component.html',
  styleUrls: ['./table-host.component.css']
})
export class TableHostComponent implements OnInit {

  public source: Product[] = products;

  constructor() { }

  ngOnInit(): void {
  }

  public removeProduct(id: number): void {
    this.source = this.source.filter((p: Product) => p.id !== id);
    alert('Product removed!');
  }

  public addProduct(product: Product): void { 
    this.source.push(product); 
  }
}
