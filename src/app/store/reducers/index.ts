import { ActionReducerMap } from '@ngrx/store';
import { booksReducer } from './booksReducer';

export interface State {
    books: {
        list: string[],
        book: any,
        loading: boolean,
        failed: boolean
    };
}

export const reducers = {
    books: booksReducer
};
