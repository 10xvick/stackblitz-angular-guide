import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-editor',
  templateUrl: './products-editor.component.html',
  styleUrls: ['./products-editor.component.scss'],
})
export class ProductsEditorComponent {
  myForm: FormGroup;
  params: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: ProductsService
  ) {}

  ngOnInit() {
    this.params = this.route.snapshot.queryParams;
    this.myForm = this.formBuilder.group(this.params);
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      const formData = this.myForm.value;

      const callback = (e) => {
        console.log(e);
        this.myForm.reset();
        this.router.navigate(['/products']);
      };

      if (this.params.id) {
        formData.id = this.params.id;
        this.service.update(formData).subscribe(callback);
      } else this.service.create(formData).subscribe(callback);
    } else {
      console.log('invalid form', this.myForm);
    }
  }
}
