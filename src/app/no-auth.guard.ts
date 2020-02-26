import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './http/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) {}

    canActivate(): boolean | UrlTree {
      if (this.authService.loggedIn()) {
        return this.router.createUrlTree(['/dashboard']);
        return false;
      } else {
        return true;
      }
    }
  
}
 