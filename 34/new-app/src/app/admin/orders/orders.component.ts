import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/data-source.service';
import { Order } from 'src/app/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public showShippedOrders: boolean = true;
  public orderList: Order[] = [];

  constructor(private dataSourseService: DataSourceService) { }

  ngOnInit(): void {
  }

  public getOrderList(): Order[] {
    return this.orderList.filter((order) => this.showShippedOrders || !order.shipped)
  }

  public removeOrder(id: number) {
    this.dataSourseService.removeOrder(id).subscribe(() => {
      this.getOrders();
    })
  }
 
  public shippedOrder(order: Order): void {
    order.shipped = true;
    this.dataSourseService.editOrder(order).subscribe(() => {
      console.log('shipped');
    })
  }

  private getOrders(): void {
    this.dataSourseService.getOrders().subscribe((orders: Order[]) => {
      this.orderList = orders;
    })
  } 

}
