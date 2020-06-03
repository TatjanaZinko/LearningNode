import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { CartLine } from 'src/app/cart-line.model';
import { Order } from 'src/app/order.model';
import { DataSourceService } from 'src/app/data-source.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public form: FormGroup;

  private cart: CartLine[];

  public show: boolean = false;

  constructor(private router: Router,
              private cartService: CartService,
              private dataSourceService: DataSourceService) { }

  ngOnInit(): void {
    
    this.cartService.getCartLines().subscribe((list) => {
      this.cart = list;
    });
    
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required ),
      address: new FormControl(null, Validators.required )
    })
  }

  public goToCart(): void {
    this.router.navigate(['/cart']);
  }

  public send(): void {
    const order = new Order(
      this.form.get('name').value,
      this.form.get('address').value,
      this.cart
    );
    
     this.dataSourceService.sendOrder(order).subscribe(() =>{
     });

    this.show = true;
  }

  public goToStore() {
    this.router.navigate(['/store']);
  }

  
}
