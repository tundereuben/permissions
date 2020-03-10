import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

describe('AuthService', () => {
    let authService: AuthService;
    let httpMock: HttpClientTestingModule;

    beforeEach(() => {TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,],
        providers: [AuthService]
    })
       authService = TestBed.get(AuthService);
       httpMock = TestBed.get(HttpTestingController);  
    });

    afterEach(() => {
        authService = null; 
        sessionStorage.removeItem('AUTH_TOKEN');
    });

    it('should return true from getAuthToken() when there is a token', () => {
        authService.setAuthToken('1234');
        expect(authService.getAuthToken()).toBe('1234');
    });

    it('should return false from getAuthToken when there is no token', () => {
        expect(authService.getAuthToken()).toBeFalsy();
    })

    it('should return an Observable when authenticated', () => {
        
    });

    it('should return true when a user is logged in', () => {
        authService.setAuthToken('1234');
        authService.getAuthToken();
        expect(authService.loggedIn()).toBeTruthy();
    })
});