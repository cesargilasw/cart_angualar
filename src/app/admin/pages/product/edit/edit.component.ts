import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../../services/category/category.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  form!: FormGroup;
  idProduct;
  isLoading = false;
  submitted = false;
  currency = "\^([\\d]{0,4})(\\.|$)([\\d]{2,2}|)$";
  categories: any;
  
  constructor(
    private _productService: ProductService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private formBuilder: FormBuilder,
    private _categoryService: CategoryService ) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.activatedRoute.paramMap.subscribe(params => {
      this.idProduct = params.get('id');
      if (this.idProduct) {
        this.getProduct(this.idProduct);
      }

      this.form = this.formBuilder.group({
        name: [ '', Validators.required],
        price: [ '', [ Validators.required, Validators.pattern(this.currency) ]],
        description: [ '', [Validators.required, Validators.minLength(3) ]],
        category: [ '', [ Validators.required ]],
      });
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  // Call API to get detail product
  getProduct(id: number): void {
    this.isLoading = true;
    this._productService.getProductById(id).then(result => {
      if (result['data']) {
        const data = result['data'];
        this.form.patchValue({
          name: data.name,
          price: data.price,
          description: data.description,
          category: data.category.id,
        });
      }
      this.isLoading = false;
    });
  }

  // Call API to get all categories
  getCategories(): void {
    this._categoryService.getCategory().then(result => {
      if (result['data']) {
        this.categories = result['data'];
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    if( this.idProduct ){
      this.editProduct();
    } else {
      this.createProduct();
    }

  }

  // Create a new product
  createProduct() {
    this.isLoading = true;
    this._productService.createProduct(this.form.value).then( data => {
      this.router.navigate(['../product'], { relativeTo: this.activatedRoute });
    }, error => {
      console.log( error );
      this.isLoading = false;
    });
  }

  // Edit product data
  editProduct() {
    this.isLoading = true;
    this._productService.editProduct( this.form.value, this.idProduct ).then( data => {
      this.router.navigate(['/admin/product']);
    }, error => {
      console.log( error );
      this.isLoading = false;
    });
  }

}
