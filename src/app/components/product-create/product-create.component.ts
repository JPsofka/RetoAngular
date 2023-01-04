import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/Product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product = {
    Name:"",
    InInventory:0,
    Enabled:0,
    Min:0,
    Max:0
  };

  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  CreateProduct(): void {
    const data = {
      Name: this.product.Name,
      InInventory: this.product.InInventory,
      Enabled: this.product.Enabled,
      Min: this.product.Min,
      Max: this.product.Max
    }

    this.productService.create(data)
      .subscribe({next: (value:Product)=> {
        console.log(value)
        this.submitted = true;
      }})
  }

  newProduct():void {
    this.submitted = false;
    this.product = {
      Name:"",
      InInventory:0,
      Enabled:0,
      Min:0,
      Max:0
    }
  }

}
