import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, Form, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth, AuthService } from '../http/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    authType: [''],
    username: [''],
    password: [''],
  })

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // this.createForm();
  }

  onSubmit() {
    const rawData = this.loginForm.getRawValue();
    const auth: Auth = {
      authType: rawData.authType,
      username: rawData.username,
      password: rawData.password
    }

    console.log(rawData)

    this.authService.authenticate(auth).subscribe(token => {
      this.authService.setAuthToken(token.access_token);
      this.router.navigate(['/dashboard']);
      // TODO: Destroy form data after login
    });
  }
}
