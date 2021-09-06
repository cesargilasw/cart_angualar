import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  cartData = [];
  countCartProducts = 0;
  constructor(private _cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.getCartData();
  }

  // Get array with cart data
  getCartData(): void {
    this.cartData = this._cartService.getCartData();
    this.countCartProducts = this._cartService.getCountProducts();
  }

  /**
  * Go to checkout and remove cart localstorage
  * @param {$event} Event     
  */
  goCheckout(e: Event ) {
    e.preventDefault();
    this._cartService.removeCartData();
    this.router.navigate([`/cart/checkout`]).then(() => {
      window.location.reload();
    });;

  }

}
