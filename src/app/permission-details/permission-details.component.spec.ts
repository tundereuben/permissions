import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../http/auth.service'; 

import { PermissionDetailsComponent } from './permission-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PermissionDetailsComponent', () => {
  const authServiceStub: jasmine.SpyObj<AuthService> = jasmine.createSpyObj(
    'authService', ['authenticate', 'setAuthToken', 'getAuthToken']
  );

  let component: PermissionDetailsComponent;
  let fixture: ComponentFixture<PermissionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionDetailsComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,

      ],
      providers: [
        {provide: AuthService, useValue: authServiceStub},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display selected permission details', () => {
    pending();
  });
});
