import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  public total: number;

  public count: number;

  constructor(private router: Router,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.total = this.cartService.calculateTotal();
    this.count = this.cartService.calculateItemCount();
  }

  public goToCart():void {
    this.router.navigate(['/cart']);    
  }

  

}
