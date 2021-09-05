import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // Default the navbar is closed
  navbarOpen = false;
  constructor(
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit() {
  }

  // Functionality of toggle button on responsive view
  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  // method to remove the session from the local storage and redirect the user to the home page.

  logout = () => this.authenticationService.logout();
 //logout = () => { console.log(123) }
}
