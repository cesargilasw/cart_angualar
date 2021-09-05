import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../../services/authentication.service';
import { AlertService } from '../../../services/alert/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {

/*       if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/products']);
      } */

    }

  ngOnInit(): void {

  }

  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();
    //this.loading = true;
    this.authenticationService.login( 'cesar@mail.com',  '123'  ).subscribe(
        data => {
         alert(JSON.stringify(data) );
          //this.router.navigate([this.returnUrl]);
          //this.router.createUrlTree(['/'], {relativeTo: this.route});
          this.router.navigate(['/'], { relativeTo: this.route });
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
