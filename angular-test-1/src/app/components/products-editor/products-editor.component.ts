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
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: ProductsService
  ) {}

  ngOnInit() {
    const { id, name } = this.route.snapshot.queryParams || {
      id: '',
      name: '',
    };

    this.id = id;

    this.myForm = this.formBuilder.group({
      name: [name, [Validators.required]],
      information: [''],
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.service.create(formData).subscribe((e) => {
        console.log(e);
        this.myForm.reset();
        this.router.navigate(['/products']);
      });
    } else {
      console.log('invalid form', this.myForm);
    }
  }
}
