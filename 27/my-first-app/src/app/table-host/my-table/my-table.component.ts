import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../table-host.component';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input() public productList: Product[] = [];

  @Output() public removeProduct: EventEmitter<number> = new EventEmitter();

  public product: Product = {
      id: null,
      name: null,
      price: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  public addProduct(): void {
    console.log(this.product);
  }

  public remove(product: Product): void {
    this.productList = this.productList.filter((p: Product) => p.id !== product.id);
    this.removeProduct.emit(product.id);
  }

}
