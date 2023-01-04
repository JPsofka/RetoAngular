import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from 'src/Product';

const baseURL = 'http://localhost:5090/api/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Product[]> {
    return this.httpClient.get<Product[]>(baseURL);
  }

  get(id:number): Observable<Product> {
    return this.httpClient.get<Product>(`${baseURL}/${id}`);
  }

  create(data:Product): Observable<Product> {
    return this.httpClient.post<Product>(baseURL, data);
  }

  update(id:number, data:Product): Observable<boolean> {
    return this.httpClient.put<boolean>(`${baseURL}/${id}`, data);
  }

  delete(id:number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${baseURL}/${id}`);
  }

}
