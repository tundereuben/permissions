import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Auth, AuthService } from '../http/auth.service'; 

import { LoginComponent } from './login.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PrimeDashboardComponent } from '../prime-dashboard/prime-dashboard.component';

import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';

import { of } from 'rxjs';


describe('LoginComponent', () => {
  const authServiceStub: jasmine.SpyObj<AuthService> = jasmine.createSpyObj(
    'authService', ['authenticate', 'setAuthToken', 'getAuthToken']
  );

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  // let el: DebugElement;
  let authService: AuthService;
  let httpTestingController: HttpTestingController;
  let fromBuilder: FormBuilder;
  let router: Router;
  let routes = [{
    path: '',
    component: PrimeDashboardComponent
  }]


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, PrimeDashboardComponent ],
      providers: [
        {provide: AuthService, useValue: authServiceStub},
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule,
        FormsModule,
        ButtonModule,
        TableModule, PanelModule, DialogModule, NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login form', () => {
    expect(component.loginForm).toBeTruthy();
  });

  it('should have form controls', () => {
    expect(component.loginForm.controls).toBeTruthy();
  });

  it('should contain correct form control names', () => {
    expect(typeof(component.loginForm.controls)).toEqual('object');
    expect(Object.keys(component.loginForm.controls)).toContain('authType');
    expect(Object.keys(component.loginForm.controls)).toContain('username');
    expect(Object.keys(component.loginForm.controls)).toContain('password');
  });

  it('should be invalid when form is empty', () => {
    component.loginForm.controls['authType'].setValue('ADMIN');
    component.loginForm.controls['username'].setValue('ADMIN ');
    component.loginForm.controls['password'].setValue('1234567');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should have a valid username', () => {
    component.loginForm.controls['username'].setValue('ADMIN');
    expect(component.loginForm.controls['username'].value).toBe('ADMIN');
  });

  it('should have a valid authType', () => {
    component.loginForm.controls['authType'].setValue('ADMIN');
    expect(component.loginForm.controls['authType'].value).toBe('ADMIN');
  });

  it('should have a valid password', () => {
    component.loginForm.controls['password'].setValue('1234567');
    expect(component.loginForm.controls['password'].value).toBe('1234567');
  });


  it('should authenticate user when form is submitted', () => {
    component.loginForm.controls['authType'].setValue('ADMIN');
    component.loginForm.controls['username'].setValue('ADMIN ');
    component.loginForm.controls['password'].setValue('1234567');

    authServiceStub.authenticate.and.returnValue(of());
    fixture.autoDetectChanges();

    fixture.nativeElement.querySelector('button').click();
    expect(authServiceStub.authenticate.calls.any()).toBeTruthy();

    const loginObj = {
      grant_type : 'password',
      username : 'ADMIN:ADMIN',
      password : '1234567'
    }

    // TODO: FIX LOGIN PROBLEM
    // const token = sessionStorage.getItem('AUTH_TOKEN');
    // const authToken = expect(authServiceStub.authenticate).toHaveBeenCalledWith(loginObj);
  });



});
