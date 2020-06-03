import { Injectable } from '@angular/core';
import { CartLine } from 'src/app/cart-line.model';
import { Product } from 'src/app/product.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartLineList: CartLine[] = [];

  constructor() { }

  public addCartLine(product: Product):void {
    const findedLine = this.cartLineList.find((cartline) => cartline.product.id === product.id);

    if(findedLine) {
      findedLine.count += 1;
    } else{
      const line = new CartLine(product, 1);
      this.cartLineList.push(line); 
    }      
  }

  public getCartLines(): Observable<CartLine[]> {
    return of(this.cartLineList);
  }

  public removeLine(id: number): Observable<void> {
    return new Observable((observer) => {
      const index = this.cartLineList.findIndex((line: CartLine) => line.product.id === id );
      this.cartLineList.splice(index, 1);

      observer.next();
      observer.complete();
    }) 
  }

  public calculateTotal(): number {
    let sum = 0;
    this.cartLineList.forEach((line) => {
        sum += (line.count * line.product.price);
    });
    
    return sum;
  }

  public calculateItemCount(): number {
    let count = 0;
    this.cartLineList.forEach(() => {
      count ++;
    });
    
    return count;
  }

  public clear():void {
    this.cartLineList = [];
  }
}
