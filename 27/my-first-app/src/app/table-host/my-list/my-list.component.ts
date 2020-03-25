import {Component, OnInit} from '@angular/core';
import { TableService } from '../../table.service';
import {Observable} from 'rxjs';
import {Product} from '../product.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {

  public list: Observable<string[]>;

  constructor(private tableService: TableService) {
  }

  ngOnInit(): void {
    this.list = this.tableService.getProducts().pipe(
      map((product: Product[]) => {
        const nameList = product.map((p: Product) => {
          return p.name;
        });

        return nameList;
      })
    );
  }

}
