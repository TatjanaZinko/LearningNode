import { Injectable } from '@angular/core';
import { Product } from './table-host/product.model';
import {BehaviorSubject, Observable, of,} from 'rxjs';
import set = Reflect.set;
import {HttpClient} from '@angular/common/http';

const products: Array<Product> = [
  {id: 1, name: 'Product 1', price: 100},
  {id: 2, name: 'Product 2', price: 200},
  {id: 3, name: 'Product 3', price: 300},
  {id: 4, name: 'Product 4', price: 400},
  {id: 5, name: 'Product 5', price: 500},
  {id: 6, name: 'Product 6', price: 600},
  {id: 7, name: 'Product 7', price: 700},
  {id: 8, name: 'Product 8', price: 800},
  {id: 9, name: 'Product 9', price: 900},
  {id: 10, name: 'Product 10', price: 1000},
  new Product(11, 'Product 10', 1100)
];

@Injectable({
  providedIn: 'root'
})
export class TableService {

  public pass: string;

  private list: Product[] = products;

  private subject$: BehaviorSubject<Product[]> = new BehaviorSubject(this.list);

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3500/product');
     // return this.subject$.asObservable();
  }

  public addProduct(body: Product): Observable<void> {
    return this.http.post<void>('http://localhost:3500/product', body);
  }

  public removeProduct(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:3500/product/' + id);
    // this.list = this.list.filter((p) => p.id !== id);
    // this.subject$.next(this.list);
  }

  public getProduct (id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:3500/product/' + id)
  }
}



