import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const currentRole = this.authenticationService.currentUserValue.role;
    alert(currentRole);
    if (currentRole && currentRole == 'admin') {
        return true;
    }
    this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
    return false;
  }
  
}
