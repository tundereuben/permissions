import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Auth, AuthService } from '../http/auth.service'; 

import { PrimeDashboardComponent } from './prime-dashboard.component';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PrimeDashboardComponent', () => {
  const authServiceStub: jasmine.SpyObj<AuthService> = jasmine.createSpyObj(
    'authService', ['authenticate', 'setAuthToken', 'getAuthToken']
  );

  let component: PrimeDashboardComponent;
  let fixture: ComponentFixture<PrimeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeDashboardComponent ],
      imports: [
        FormsModule, ReactiveFormsModule,
        ButtonModule,
        TableModule, PanelModule, DialogModule, NoopAnimationsModule,
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
    fixture = TestBed.createComponent(PrimeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PrimeDashboardComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should get all permissions', () => {
    pending()
  });

  it('should get a specific permission with id',() => {
    pending()
  });

  it('should display a permission-add from', () => {
    pending();
  });

  it('should add new permission', () => {
    pending();
  });

  it('should update an existing permission', () => {
    pending();
  });

  it('should delete a specific permission', () => {
    pending();
  })

});
