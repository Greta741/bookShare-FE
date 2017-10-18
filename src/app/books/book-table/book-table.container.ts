import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Book } from '../../utils/interfaces';
import { getBooksAction } from '../../store/actions/booksActions';

@Component({
    selector: 'book-table-container',
    template: `<book-table [books]="books"></book-table>`,
})
export class BookTableContainer implements OnInit {
    public books: Book[];

    constructor(private store: Store<AppState>){
        store.select('books', 'list').subscribe(data => {
            if (data) {
                this.books = data['books'];
            }
        });
    }

    ngOnInit() {
        this.store.dispatch(new getBooksAction())
    }
}