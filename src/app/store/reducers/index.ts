import { ActionReducerMap } from '@ngrx/store';
import { booksReducer } from './booksReducer';
import {userReducer} from "./userReducer";

export interface State {
    books: {
        list: string[],
        book: any,
        loading: boolean,
        failed: boolean
    };
    user: null;
}

export const reducers = {
    books: booksReducer,
    user: userReducer,
};
