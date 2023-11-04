import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { endpoints } from '../../../../constants/endpoints';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getproducts() {
    const url = '/todo/test';
    return this.http.get(url);
  }

  test() {
    return this.http.get(endpoints.server.url + '/test');
  }
}
