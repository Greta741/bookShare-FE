import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Book } from '../../utils/interfaces';
import { getBooksAction } from '../../store/actions/booksActions';

@Component({
    selector: 'book-table-container',
    template: `<book-table [books]="books" [userId]="userId"></book-table>`,
})
export class BookTableContainer implements OnInit {
    public books: Book[];
    public userId: string = '';

    constructor(private store: Store<AppState>){
        store.select('books', 'list').subscribe(data => {
            if (data) {
                this.books = data['books'];
            }
        });
        this.userId = localStorage.getItem('userId');
    }

    ngOnInit() {
        this.store.dispatch(new getBooksAction());
    }
}