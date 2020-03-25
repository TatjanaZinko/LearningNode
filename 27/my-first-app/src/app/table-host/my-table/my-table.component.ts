import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
import { TableService } from '../../table.service';


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {

  //  @Input() public productList: Product[] = [];
  //  @Output() public removeProduct: EventEmitter<number> = new EventEmitter();

  public productList: Product[] = [];

  constructor(public tableService: TableService) { }

  ngOnInit(): void {
    this.tableService.getProducts().subscribe((data: Product[]) => {
        this.productList = data;
    });
  }

   public remove(id: number): void {
     this.tableService.removeProduct(id);
     this.tableService.getProducts().subscribe((data: Product[]) => {
      this.productList = data;
  });
   } 

}
