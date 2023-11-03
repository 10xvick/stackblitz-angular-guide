import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../constants/endpoints';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http;

  constructor(private httpx: HttpClient) {
    this.http = httpx;
  }

  getproducts() {
    return this.http.get(endpoints.locathost + 'todo/test');
  }

  test() {
    this.getproducts().subscribe(console.log);
  }
}
