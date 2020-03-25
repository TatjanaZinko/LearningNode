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

  addCartLine(product: Product):void {
      const line = new CartLine(product, 1);
      this.cartLineList.push(line);
  }

  getCartLines(): Observable<CartLine[]> {
    return of(this.cartLineList);
  }
}
