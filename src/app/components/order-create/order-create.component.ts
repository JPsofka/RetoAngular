import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { Order } from 'src/Order';
import { Product } from 'src/Product';
import { Purchase } from 'src/Purchase';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  products: any;
  productsSelected : any[]= []
  order :Order = {
    IdType:"",
    IdClient:0,
    ClientName:"",
    Purchases:[] 
  };

  orderEmpty :Order = {
    IdType:"",
    IdClient:0,
    ClientName:"",
    Purchases:[] 
  };

  purchase: Purchase = {
    ProductId:0,
    Quantity:0
  };

  purchaseEmpty: Purchase = {
    ProductId:0,
    Quantity:0
  };

  quantity = 0
  constructor(private productService: ProductService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts():void{
    this.productService.getAll()
      .subscribe({next: (values)=> {
        this.products = values
      }})
  }

  add(product:any) {
    this.productsSelected.push(product);
    this.setPurchase(product.productId, this.quantity);
    this.order.Purchases.push(this.purchase);
    this.purchase = this.purchaseEmpty;
  }

  setPurchase(productId:number, quantity:number){
    this.purchase.ProductId = productId;
    this.purchase.Quantity = quantity
    this.quantity = 0;
  }
  
  buy(){
    this.orderService.create(this.order).subscribe({complete:() => {
      this.order = this.orderEmpty;
      this.productsSelected = []
    }});
  }
}
