import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { User } from "../../utils/interfaces";

const clientId = 'booksClient';
const clientSecret = 'super_secret';
const headers: Headers = new Headers({'Content-Type': 'application/json'});

@Injectable()
export class UserService {
    apiRoot: string = 'http://localhost:8081/api/';

    constructor(private http: Http) { }

    registerUser(user: User) {
        return this.http.post(this.apiRoot + 'users', user).map(res => res.json());
    }
    getCode(userLoginData: any) {
        const headers: any = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', `Basic ${this.decodeUser(userLoginData.email, userLoginData.password)}`);
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiRoot + 'oauth2/authorize?client_id=' + clientId, {}, options).map(res => res.json());
    }

    getToken(code: string) {
        const headers: any = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', `Basic ${this.decodeUser(clientId, clientSecret)}`);
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiRoot + 'oauth2/token', { code }, options).map(res => res.json());
    }

    private decodeUser(user: string, password: string): string {
        return btoa(user + ':' + password);
    }

}