import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CartLine } from 'src/app/cart-line.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartLines: CartLine[] = [];

  constructor(private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.getLines();
  }

  public removeLine(id: number): void {
    this.cartService.removeLine(id).subscribe(() => this.getLines());
  }
  
  public calculateTotal(): number {
    return this.cartService.calculateTotal();    
  }

  public goToStore() {
    this.router.navigate(['/store']);
  }

  public goToCheckout() {
    this.router.navigate(['/checkout']);
  }

  private getLines() {
    this.cartService.getCartLines().subscribe((lines) => {
      this.cartLines = lines;
    });
  }

  public plus(line: CartLine) {
    line.count++;
  }

  public minus(line: CartLine) {
    if (line.count > 1) { line.count-- }    
  }

}
