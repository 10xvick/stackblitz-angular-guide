import { Component } from '@angular/core';
import { ROUTES, Router, RouterLink } from '@angular/router';
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
    console.log('oninit');
    this.productservice.test();
  }
}
