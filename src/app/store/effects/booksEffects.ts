import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'
import { BooksService } from '../services/booksService';
import {
    actions, booksActions, createBookFailedAction, createBookSuccessAction, deleteBookFailedAction,
    deleteBookSuccessAction,
    getBookByIdFailedAction,
    getBookByIdSuccessAction,
    getBooksFailedAction,
    getBooksSuccessAction, updateBookFailedAction, updateBookSuccessAction
} from "../actions/booksActions";

@Injectable()
export class BooksEffects {
    constructor( private actions$ : Actions,
                 private booksService : BooksService ) {
    }

    @Effect() getBooks$ = this.actions$
        .ofType(actions.GET_BOOKS)
        .switchMap(action => this.booksService.getBooks())
        .map(books => new getBooksSuccessAction(books))
        .catch((e) => Observable.of(new getBooksFailedAction(e)));

    @Effect() getBookById$ = this.actions$
        .ofType(actions.GET_BOOK_BY_ID)
        .switchMap(action => this.booksService.getBookById(action))
        .map(book => new getBookByIdSuccessAction(book))
        .catch((e) => Observable.of(new getBookByIdFailedAction(e)));

    @Effect() createBook$ = this.actions$
        .ofType(actions.CREATE_BOOK)
        .switchMap(action => this.booksService.createBook(action))
        .map(result => new createBookSuccessAction(result))
        .catch((e) => Observable.of(new createBookFailedAction(e)));

    @Effect() updateBook$ = this.actions$
        .ofType(actions.UPDATE_BOOK)
        .switchMap(action => this.booksService.updateBook(action))
        .map(result => new updateBookSuccessAction(result))
        .catch((e) => Observable.of(new updateBookFailedAction(e)));

    @Effect() deleteBook$ = this.actions$
        .ofType(actions.DELETE_BOOK)
        .switchMap(action => this.booksService.deleteBook(action))
        .map(result => new deleteBookSuccessAction(result))
        .catch((e) => Observable.of(new deleteBookFailedAction(e)));
}