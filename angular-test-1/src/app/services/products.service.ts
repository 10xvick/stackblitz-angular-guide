import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, of } from 'rxjs';
import { endpoints } from '../../../../constants/endpoints';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  api = endpoints.server.api.products;
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(this.api.read.url).pipe(
      map((e: any) => {
        console.log(e);
        return e.data;
      })
    );
  }

  create() {}

  delete(id) {
    console.log('delete');
    return this.http.delete(this.api.delete.url + '/' + id).pipe(
      map((e: any) => {
        console.log(e);
        return e.data;
      })
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
