import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, map, mergeMap } from 'rxjs';
import { endpoints } from '../../../../constants/endpoints';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  api = endpoints.server.api.products;
  constructor(private http: HttpClient) {}

  products = new BehaviorSubject([]);

  get() {
    return this.http.get(this.api.read.url).pipe(
      map((e: any) => {
        this.products.next(e.data);
      })
    );
  }

  create(product = { name: 'product-' + Math.random() }) {
    const p = JSON.stringify(product);
    return this.http
      .post(this.api.create.url, p, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        map((e: any) => {
          return e.data;
        }),
        mergeMap((e) => this.get())
      );
  }

  delete(id) {
    return this.http.delete(this.api.delete.url + '/' + id).pipe(
      map((e: any) => {
        return e.data;
      }),
      mergeMap((e) => this.get())
    );
  }

  test() {
    return this.http.get(this.api.read.url).pipe(
      map((e: any) => {
        console.log(e.data);
        return e.data;
      })
    );
  }
}
