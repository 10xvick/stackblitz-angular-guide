import { Component } from '@angular/core';
import { ROUTES, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  routes = new Router().config;

}
