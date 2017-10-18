import { actions, booksActions } from '../actions/booksActions';
import { BooksState } from '../../utils/interfaces';

export function getBooks() {
    return {
        type: actions.GET_BOOKS,
        payload: ''
    }
}

const initialState: BooksState = {
    list: null,
    bookView: null,
    bookEdit: null,
    bookCreate: null,
    bookDelete: null,
}

export function booksReducer( state = initialState, action: booksActions ) {
    switch( action.type ) {
        case actions.GET_BOOKS:
            return Object.assign({}, state, {list: { loading: true, success: false }});
        case actions.GET_BOOKS_SUCCESS:
            return Object.assign({}, state, {list: { books: action.payload, loading: false, success: true }});
        case actions.GET_BOOKS_FAILED:
            return Object.assign({}, state, {list: { loading: false, success: false }});
        case actions.GET_BOOK_BY_ID:
            return Object.assign({}, state, {bookView: { loading: true, success: false }});
        case actions.GET_BOOK_BY_ID_SUCCESS:
            return Object.assign({}, state, {bookView: { book: action.payload, loading: false, success: true }});
        case actions.GET_BOOK_BY_ID_FAILED:
            return Object.assign({}, state, {bookView: { loading: false, success: false} });
        case actions.CREATE_BOOK:
            return Object.assign({}, state, {bookCreate: { loading: true, success: false }});
        case actions.CREATE_BOOK_SUCCESS:
            return Object.assign({}, state, {bookCreate: { loading: false, success: true }});
        case actions.CREATE_BOOK_FAILED:
            return Object.assign({}, state, {bookCreate: {loading: false, success: false}});
        case actions.UPDATE_BOOK:
            return Object.assign({}, state, {bookEdit: { loading: true, success: false }});
        case actions.UPDATE_BOOK_SUCCESS:
            return Object.assign({}, state, {bookEdit: { loading: false, success: true }});
        case actions.UPDATE_BOOK_FAILED:
            return Object.assign({}, state, {bookEdit: { loading: false, success: false }});
        case actions.DELETE_BOOK:
            return Object.assign({}, state, {bookDelete: { loading: true, success: false }});
        case actions.DELETE_BOOK_SUCCESS:
            return Object.assign({}, state, {bookDelete: { loading: false, success: true }});
        case actions.DELETE_BOOK_FAILED:
            return Object.assign({}, state, {bookDelete: { loading: false, success: false }});
        default:
            return state;
    }
}