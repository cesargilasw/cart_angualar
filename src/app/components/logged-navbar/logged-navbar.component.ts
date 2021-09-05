import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logged-navbar',
  templateUrl: './logged-navbar.component.html',
  styleUrls: ['./logged-navbar.component.scss']
})
export class LoggedNavbarComponent implements OnInit {
  currentUser: any;
  currentUserName = '';
  constructor(private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.currentUserName = this.currentUser.name;
  }
  logout() {
    this.authenticationService.logout();
    location.reload();
    //this.router.navigate(['auth']);
/*     alert(2);
    this.router.navigate(['/']); */

  }
}
