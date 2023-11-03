import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  routes = new Router().config;

  constructor(private productservice: ProductsService) {}

  ngOnInit() {
    this.productservice.getproducts().subscribe(console.log);
  }
}
