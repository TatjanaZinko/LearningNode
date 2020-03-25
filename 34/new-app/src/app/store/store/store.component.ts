import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/data-source.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public productList = [];

  constructor( private dataSourceService: DataSourceService ) { }

  ngOnInit(): void {
    this.dataSourceService.getProducts().subscribe((list) => {
      this.productList = list;
    })
  }



}
