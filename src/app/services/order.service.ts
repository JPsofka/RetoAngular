import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/Order';

const baseURL = 'http://localhost:5090/api/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Order[]> {
    return this.httpClient.get<Order[]>(baseURL);
  }

  get(id:number): Observable<Order> {
    return this.httpClient.get<Order>(`${baseURL}/${id}`);
  }

  create(data:Order): Observable<Order> {
    return this.httpClient.post<Order>(baseURL, data);
  }

  update(id:number, data:Order): Observable<boolean> {
    return this.httpClient.put<boolean>(`${baseURL}/${id}`, data);
  }

  delete(id:number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${baseURL}/${id}`);
  }
}
