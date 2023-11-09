import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: ProductsService
  ) {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      information: [''],
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log(this.myForm);
      this.service.create(formData).subscribe((e) => {
        console.log(e);
        this.myForm.reset();
        this.router.navigate(['/products']);
      });
    }
  }
}
