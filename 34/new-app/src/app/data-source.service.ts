import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  private source: any = [
    {
      name: 'Product name 1',
      price: 300,
      desc: 'Product description',
      category: 'chess',
      id: 1
    },
    {
      name: 'Product name 2',
      price: 400,
      desc: 'Product description',
      category: 'chess',
      id: 2
    },
    {
      name: 'Product name 3',
      price: 500,
      desc: 'Product description',
      category: 'chess',
      id: 3
    }
]

  constructor() { }

  public getProducts(): Observable<any> {
    return of(this.source);
  }

}
