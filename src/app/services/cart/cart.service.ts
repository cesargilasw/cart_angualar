import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CartItem } from '../../_models/cartItem'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cartItems = new BehaviorSubject([]);
  constructor() { 
  }

  /**
  * Add the new product to the cart array on localstorage, if exist the product  inside, only increment +1 the qty
  * @param {product} CartItem     
  */
  addItem( product: CartItem ) {
    let items: any;
    items = this.getCartData();

    let exist = [];
    exist = items.find((item: CartItem) => item.id == product.id);

    if (exist) {
      items.forEach((item: CartItem) => {
        if (item.id == product.id) {
          item.qty++;
        }
      });
      this.setCartData(items);
    } else {
      const newData = [...items, product];
      this.setCartData(newData);
    }

  }
  // Set local storage with array of cart products
  setCartData(data: any) {
    localStorage.setItem('cart', JSON.stringify(data) );
  }

  // Get cart products of localstorage
  getCartData() {
    let js = localStorage.getItem('cart') || null;
    if (js) {
      return JSON.parse(js);
    } else {
      return [];
    }
  }

  // Return the number of diferentes products inside the cart
  getCountProducts() {
    return this.getCartData().length;
  }

  // remove cart localstorage
  removeCartData() {
    localStorage.removeItem('cart');
  }

}
