import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;
  currentProduct!: null;
  currentIndex = -1;
  product = {
    productId:0,
    name:"",
    inInventory:0,
    enabled:0,
    min:0,
    max:0
  };
  productEmpty = {
    productId:0,
    name:"",
    inInventory:0,
    enabled:0,
    min:0,
    max:0
  };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts():void{
    this.productService.getAll()
      .subscribe({next: (values)=> {
        this.products = values
        console.log(this.products)
      }})
  }

  refresh(): void {
    this.getAllProducts();
    this.currentProduct = null;
    this.currentIndex = -1;
    this.setCurrentProduct(this.productEmpty);
  }

  setCurrentProduct(productSelected:any): void {
    this.currentProduct = productSelected;
    this.product = productSelected;
  }

  delete(id:number):void {
    this.productService.delete(id).subscribe({complete: ()=> this.refresh()});
  }

  edit(id:number, product:any):void {
    this.productService.update(id, product).subscribe({complete: ()=> {
      this.refresh;
      this.setCurrentProduct(this.productEmpty);
    }})
  }
}
