import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { TableService } from '../table.service';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-table-host',
  templateUrl: './table-host.component.html',
  styleUrls: ['./table-host.component.scss']
})
export class TableHostComponent implements OnInit {

  public source: Product[] = [];

  constructor(
    private tableServise: TableService
  ) { }

  ngOnInit(): void {
    this.tableServise
    .getProducts()
    .pipe(
      delay(2000)
    )
    .subscribe((data: Product[]) => {
      this.source = data;
    });
  }

  public removeProduct(id: number): void {
    alert(`Product with id: ${id} deleted!!!`);
    this.source = this.source.filter((p) => p.id !== id)
  }

  public addProduct(product) {
    this.source.push(product);
  }

  }
