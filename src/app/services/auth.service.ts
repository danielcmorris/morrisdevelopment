// services/auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    server = environment.API_URL;
    constructor(private router: Router, private http: HttpClient) { }

    isAuthenticated(): boolean {
        return true;
        return !!localStorage.getItem('auth_token');
    }

    login(creds: { user: string, password: string }) {
       return this.http.post(this.server + '/api/auth/login', creds).pipe(
        tap((retval: any) => {
            localStorage.setItem('auth_token', retval.token);
        })
    );
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.router.navigate(['/login']);
    }

    getToken(): string | null {
        return localStorage.getItem('auth_token');
    }
}