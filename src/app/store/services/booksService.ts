import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from '../../utils/interfaces';

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
        return this.http.post(this.apiRoot, action.payload).map(res => res.json());
    }

    updateBook(action: any) {
        return this.http.put(`${this.apiRoot}/${action.payload.id}`, action.payload.book).map(res => res.json());
    }

    deleteBook(action: any) {
        return this.http.delete(`${this.apiRoot}/${action.payload}`).map(res => res.json());
    }

}