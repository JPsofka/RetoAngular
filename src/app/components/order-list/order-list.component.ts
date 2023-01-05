import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: any;
  currentOrder!: null;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getAllOrders()
  }

  getAllOrders():void{
    this.orderService.getAll()
      .subscribe({next: (values)=> {
        this.orders = values
      }})
  }

  refresh(): void {
    this.currentOrder = null;
  }

  setCurrentOrder(orderSelected:any): void {
    this.currentOrder = orderSelected;
  }

}
