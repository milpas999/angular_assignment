import { Http, Response, RequestOptions, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProviderServiceService {
    public API_URL = 'http://ngass.aztechstaging.tk/';
    constructor(
        private http: Http,
        private router: Router,
        private userService: UserServiceService
    ) { }

    public login(email: string, password: string) {
        return this.http.post(this.API_URL + 'login', {
            email,
            password
        })
            .pipe(map(res => res.json()));
    }

    public addUser(firstName: string, lastName: string, email: string, password: string, roles: string) {
        const options = new RequestOptions({
            headers: new Headers({
                Authorization: this.userService.getAccessToken()
            })
        });
        return this.http.post(this.API_URL + 'addUsers', {
            firstName,
            lastName,
            email,
            password,
            roles
        }, options).pipe(map(res => res.json()));
    }

    public register(firstName: string, lastName: string, email: string, password: string, roles: string) {
        return this.http.post(this.API_URL + 'register', {
            firstName,
            lastName,
            email,
            password,
            roles
        }).pipe(map(res => res.json()));
    }

    public getUserListing() {
        const options = new RequestOptions({
            headers: new Headers({
                Authorization: this.userService.getAccessToken()
            })
        });
        return this.http.get(this.API_URL + 'getUserList', options)
            .pipe(map(res => res.json()));
    }
}
