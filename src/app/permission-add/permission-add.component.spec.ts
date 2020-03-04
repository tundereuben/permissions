import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Auth, AuthService } from '../http/auth.service'; 

import { PermissionAddComponent } from './permission-add.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('PermissionAddComponent', () => {
  const authServiceStub: jasmine.SpyObj<AuthService> = jasmine.createSpyObj(
    'authService', ['authenticate', 'setAuthToken', 'getAuthToken']
  );

  let component: PermissionAddComponent;
  let fixture: ComponentFixture<PermissionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionAddComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {provide: AuthService, useValue: authServiceStub},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have permission add/update form', () => {
    pending();
  });

  it('should get selected permission and populate form', () => {
    pending();
  });

  it('should add a new permission', () => {
    pending();
  });

  it('should updaate an existing permission', () => {
    pending();
  });

  it('should redirect back to PrimeDashboard', () => {
    pending();
})


});
