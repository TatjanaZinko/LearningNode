import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

//   private source: any = [
//     {
//       name: 'Product name 1',
//       price: 300,
//       desc: 'Product description',
//       category: 'chess',
//       id: 1
//     },
//     {
//       name: 'Product name 2',
//       price: 400,
//       desc: 'Product description',
//       category: 'water',
//       id: 2
//     },
//     {
//       name: 'Product name 3',
//       price: 500,
//       desc: 'Product description',
//       category: 'chess',
//       id: 3
//     }
// ]


  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3500/product');
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:3500/product/' + id);
  }

  public removeProduct(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:3500/product/' + id);
  }

  public createProduct(product: Product): Observable<void> {
    return this.http.post<void>('http://localhost:3500/product', product);
  }

  public editProduct(product: Product): Observable<void> {
    return this.http.put<void>('http://localhost:3500/product/'+ product.id, product);
  }

  /*order*/

 public sendOrder(order: Order): Observable<void> {
  return this.http.post<void>('http://localhost:3500/order', order);
}

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3500/order');
  }

  public removeOrder(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:3500/order/' + id);
  }

  public editOrder(order: Order): Observable<void> {
    return this.http.put<void>('http://localhost:3500/order/'+ order.id, order);
  }

}
