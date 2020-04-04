import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserServiceService {

    constructor(
        private router: Router
    ) { }

    setAccessToken(data): void { localStorage.setItem('accessToken', data); }

    unsetAccessToken(): void { localStorage.removeItem('accessToken'); }

    getAccessToken(): string { return localStorage.getItem('accessToken'); }

    setUserRole(data): void { localStorage.setItem('userRole', data); }

    unsetUserRole(): void { localStorage.removeItem('userRole'); }

    getUserRole(): string { return localStorage.getItem('userRole'); }

    setCurrentUserData(data): void {
        delete data.password;
        localStorage.setItem('currentUser', JSON.stringify(data));
    }

    unsetCurrentUserData(): void { localStorage.removeItem('currentUser'); }

    getCurrentUserData(): Array<any> { return JSON.parse(localStorage.getItem('currentUser')); }

    isLoggedIn(): boolean {
        return (localStorage.getItem('accessToken')) ? true : false;
    }
}
