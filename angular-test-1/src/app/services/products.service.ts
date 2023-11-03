import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from '../constants/endpoints';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getproducts() {
    const url = endpoints.locathost + '/todo/test';
    return this.http.get(url);
  }

  test() {
    return of(1);
  }
}
