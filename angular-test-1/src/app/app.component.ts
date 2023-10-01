import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test-1';
  routes : Array<String> = [];
  constructor(private router:Router){
    this.router.events.subscribe(e=>{
      if(e instanceof NavigationEnd){
        console.log(e.urlAfterRedirects)
        this.routes = e.urlAfterRedirects.split('/');
      }
    })
  }

  routechange(e:any){
    console.log(e);
  }

}
