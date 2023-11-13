import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { blueprint } from '../../../../../server/models/products';

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
    this.router.navigate(['/products/editor'], {
      queryParams: blueprint.product,
    });
  }

  update(product) {
    console.log();
    this.router.navigate(['/products/editor'], {
      queryParams: product,
    });
  }

  delete(id) {
    this.service.delete(id).subscribe();
  }
}
