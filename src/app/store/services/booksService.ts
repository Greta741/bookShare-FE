import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class BooksService {
    apiRoot: string = 'http://localhost:8081/api/books';

    constructor(private http: Http) { }

    getBooks() {
        return this.http.get(this.apiRoot).map(res => res.json());
    }
    getBookById(action: any) {
        return this.http.get(`${this.apiRoot}/${action.payload}`).map(res => res.json());
    }

    createBook(action: any) {
        return this.http.post(this.apiRoot, action.payload, this.getOptions()).map(res => res.json());
    }

    updateBook(action: any) {
        return this.http.put(`${this.apiRoot}/${action.payload.id}`, action.payload.book, this.getOptions()).map(res => res.json());
    }

    deleteBook(action: any) {
        return this.http.delete(`${this.apiRoot}/${action.payload}`, this.getOptions()).map(res => res.json());
    }

    private getOptions(): RequestOptions {
        const headers: any = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', `Bearer ${localStorage.getItem('token')}`);
        return new RequestOptions({ headers: headers });
    }

}