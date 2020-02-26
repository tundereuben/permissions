import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Token } from '../login/token';

export interface Auth {
    authType: string;
     username: string; 
     password: string;
}


const AUTH_TOKEN = 'AUTH_TOKEN';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {

    }

    getAuthToken(): string {
        return sessionStorage.getItem(AUTH_TOKEN)
    }

    setAuthToken(token: string) {
        sessionStorage.setItem(AUTH_TOKEN, token);
    }

    authenticate(auth: Auth): Observable<Token> {
        console.log('Requesting logging');
        const formData = new FormData();
        formData.append('grant_type', 'password');
        formData.append('username', `${auth.authType}:${auth.username}`);
        formData.append('password', auth.password);

        const headers = new HttpHeaders()
            .append('Authorization', `Basic ${btoa(`portal-api-services:12345678`)}`);
            headers.append(
                'content-type', 'application/json;charset-UTF-8'
            )

        return this.http.post<Token>('/aig-uaa/oauth/token', formData, { headers: headers });
    }

    loggedIn() {
        return !!sessionStorage.getItem(AUTH_TOKEN);
    }
}