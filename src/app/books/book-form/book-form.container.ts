import { Component } from '@angular/core';
import { AppState, Book } from '../../utils/interfaces';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
    createBookAction, deleteBookAction, getBookByIdAction,
    updateBookAction
} from '../../store/actions/booksActions';

@Component({
    selector: 'book-form-container',
    template: `<ng-container *ngIf="!failedToFind">
        <book-form *ngIf="book"
                   [book]="book"
                   [edit]="edit"
                   (update)="updateBook($event)"
                   (remove)="deleteBook($event)">
        </book-form>
        <book-form *ngIf="!book"
                   [edit]="false"
                   (create)="createBook($event)">
        </book-form>
    </ng-container>
    <div *ngIf="failedToFind" class="border border-secondary col-md-8 mb-5 mt-5 mx-auto p-3">
        <h1>Nepavyko rasti knygos.</h1>
    </div>`,
})
export class BookFormContainer {
    public id: string;
    public book: Book;
    public failedToFind = false;
    public edit = false;

    constructor(private store: Store<AppState>, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.id = params['id'];
                this.edit = true;
                this.store.dispatch(new getBookByIdAction(this.id));
            }
        });
        this.store.select('books', 'bookView').subscribe(data => {
            if (this.id) {
                this.book = data['book'];
                if (!data['loading'] && !data['success']) {
                    this.failedToFind = true;
                }
            }
        });
    }

    public createBook(book: Book) {
        this.store.dispatch(new createBookAction(book));
    }

    public updateBook(book: Book) {
        this.store.dispatch(new updateBookAction({book, id: this.id}));
    }

    public deleteBook() {
        console.log('delete');
        this.store.dispatch(new deleteBookAction(this.id));
    }
}