import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './http/auth.service';
import { interval, Subscription } from 'rxjs';
import { filter, mergeMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Permission Consumer';
  loggedIn: boolean;
  AUTH_TOKEN = 'AUTH_TOKEN';

  subscriptions = new Subscription();
  constructor(private readonly authService: AuthService, 
                private router: Router) { }

  ngOnInit() {
    /* const subscription = interval(2000).pipe(
      filter(data => !this.authService.getAuthToken()),
      mergeMap(_ => this.authService.authenticate({ authType: 'ADMIN', username: 'ADMIN', password: '1234567' })),
      map(({ access_token }) => access_token)
    ).subscribe(token => {
      this.authService.setAuthToken(token);
    });

    this.subscriptions.add(subscription); */

    this.loggedIn = this.authService.loggedIn();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onLogout(){
    sessionStorage.removeItem(this.AUTH_TOKEN);
    this.router.navigate(['/login']);
  }
}
