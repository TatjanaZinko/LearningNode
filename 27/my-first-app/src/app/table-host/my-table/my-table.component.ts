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

  constructor() { }

  ngOnInit(): void {
  }

  public remove(product: Product): void {
    this.removeProduct.emit(product.id);
  }

}
