import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './http/auth.service'; 
import { RouterTestingModule } from '@angular/router/testing';

import { NoAuthGuard } from './no-auth.guard';

describe('NoAuthGuard', () => {
  const noAuthServiceStub: jasmine.SpyObj<AuthService> = jasmine.createSpyObj(
    'authService', ['authenticate', 'setAuthToken', 'getAuthToken']
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NoAuthGuard,
        {provide: AuthService, useValue: noAuthServiceStub},
      ], 
      imports: [
        RouterTestingModule,
      ]
    });
  });

  it('should ...', inject([NoAuthGuard], (guard: NoAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
