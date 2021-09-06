import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-logged-navbar',
  templateUrl: './logged-navbar.component.html',
  styleUrls: ['./logged-navbar.component.scss']
})
export class LoggedNavbarComponent implements OnInit {
  currentUser: any;
  currentUserName = '';
  currentRole = 'client';
  countCartItems = 0;
  constructor(private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService, private _cartService: CartService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.currentUserName = this.currentUser.name;
    this.currentRole = this.currentUser.role;
    this.getCountData();
  }

  // Call logout of service auth and remove credentials of storage
  logout() {
    this.authenticationService.logout();
    location.reload();
  }

  // Get number of type products
  getCountData(): void {
    this.countCartItems = this._cartService.getCountProducts();
  }
  
}
