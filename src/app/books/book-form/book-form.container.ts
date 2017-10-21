import { Component } from '@angular/core';
import { AppState, Book } from '../../utils/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
    createBookAction, deleteBookAction, getBookByIdAction,
    updateBookAction
} from '../../store/actions/booksActions';

@Component({
    selector: 'book-form-container',
    templateUrl: './book-form.container.html',
    styleUrls: ['./book-form.container.css']
})
export class BookFormContainer {
    public id: string;
    public book: Book;
    public failedToFind = false;
    public edit = false;
    public failedToSave = false;

    constructor(private store: Store<AppState>,
                private route: ActivatedRoute,
                private router: Router) {
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
        this.store.select('books', 'bookCreate').take(2).subscribe(data => {
            if (data['success']) {
                this.router.navigateByUrl('/');
            }
            if (!data['success'] && !data['loading']) {
                this.failedToSave = true;
            }
        })
    }

    public updateBook(book: Book) {
        this.store.dispatch(new updateBookAction({book, id: this.id}));
        this.store.select('books', 'bookEdit').take(2).subscribe(data => {
            if (data['success']) {
                this.router.navigateByUrl('/');
            }
            if (!data['success'] && !data['loading']) {
                this.failedToSave = true;
            }
        })
    }

    public deleteBook() {
        this.store.dispatch(new deleteBookAction(this.id));
        this.store.select('books', 'bookDelete').take(2).subscribe(data => {
            if (data['success']) {
                this.router.navigateByUrl('/');
            }
            if (!data['success'] && !data['loading']) {
                this.failedToSave = true;
            }
        })
    }

}
