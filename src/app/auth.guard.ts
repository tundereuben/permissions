import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './http/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      console.log('not authenticated....');
      return this.router.createUrlTree(['/login']);
    }
  }

}
