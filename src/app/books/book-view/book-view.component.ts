import { Component } from '@angular/core';
import { AppState, Book } from '../../utils/interfaces';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getBookByIdAction } from '../../store/actions/booksActions';

@Component({
    selector: 'book-view',
    templateUrl: './book-view.component.html',
})
export class BookViewComponent {
    public id: string;
    public book: Book;
    public failedToFind = false;
    public userId: string = '';

    constructor(private store: Store<AppState>, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.store.dispatch(new getBookByIdAction(this.id));
        });
        this.store.select('books', 'bookView').subscribe(data => {
            this.book = data['book'];
            if (!data['loading'] && !data['success']) {
                this.failedToFind = true;
            }
        });
        this.userId = localStorage.getItem('userId');
    }
}