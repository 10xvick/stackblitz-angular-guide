import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(public service: ProductsService, private router: Router) {}

  ngOnInit() {
    this.service.get().subscribe();
  }

  create() {
    //go to create product form
    this.router.navigate(['/products/details']);
    // this.service.create(product).subscribe();
  }

  delete(id) {
    this.service.delete(id).subscribe();
  }
}
