import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CartService } from '../../services/cart/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  countCartItems = 0;
  constructor(
    private authenticationService: AuthenticationService, private _cartService: CartService
    ) { }

  ngOnInit() {
    this.getCountData();
  }

  // Functionality of toggle button on responsive view
  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  // Method to remove the session from the local storage and redirect the user to the home page.
  logout = () => this.authenticationService.logout();

  // GEt number of type of products insede cart
  getCountData(): void {
    this.countCartItems = this._cartService.getCountProducts();
  }

}
