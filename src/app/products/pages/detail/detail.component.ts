import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../services/cart/cart.service';
import { CartItem } from 'src/app/_models/cartItem';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  isLoading: boolean = true;
  data: any;
  id: any;
  constructor(private _productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router, private _cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getProduct();
    });
  }

  // Call API to get detail product
  getProduct(): void {
    this.isLoading = true;
    this._productService.getProductById(this.id).then(result => {
      if (result['data']) {
        this.data = result['data'];
      }
      this.isLoading = false;
    });
  }
  
  // Add new product
  addProduct() {
    let p: CartItem = {
      id: this.data.id,
      name: this.data.name,
      description: this.data.description,
      price: this.data.price,
      qty: 1
    };
    this._cartService.addItem(p);
  }

  // return to product list
  backToList() {
    this.router.navigate([`/product`]);
  }


}
