import { Action } from "@ngrx/store";
import { Book } from "../../utils/interfaces";

export const actions = {
    GET_BOOKS: "GET_BOOKS",
    GET_BOOKS_SUCCESS: "GET_BOOKS_SUCCESS",
    GET_BOOKS_FAILED: "GET_BOOKS_FAILED",

    GET_BOOK_BY_ID: "GET_BOOK_BY_ID",
    GET_BOOK_BY_ID_SUCCESS: "GET_BOOK_BY_ID_SUCCESS",
    GET_BOOK_BY_ID_FAILED: "GET_BOOK_BY_ID_FAILED",

    CREATE_BOOK: "CREATE_BOOK",
    CREATE_BOOK_SUCCESS: "CREATE_BOOK_SUCCESS",
    CREATE_BOOK_FAILED: "CREATE_BOOK_FAILED",

    UPDATE_BOOK: "UPDATE_BOOK",
    UPDATE_BOOK_SUCCESS: "UPDATE_BOOK_SUCCESS",
    UPDATE_BOOK_FAILED: "UPDATE_BOOK_FAILED",

    DELETE_BOOK: "DELETE_BOOK",
    DELETE_BOOK_SUCCESS: "DELETE_BOOK_SUCCESS",
    DELETE_BOOK_FAILED: "DELETE_BOOK_FAILED",
}


export class getBooksAction implements Action {
    readonly type: string = actions.GET_BOOKS;
    payload: any;
}

export class getBooksSuccessAction implements Action {
    readonly type: string = actions.GET_BOOKS_SUCCESS;
    constructor(public payload: Book[]) { }
}

export class getBooksFailedAction implements Action {
    readonly type: string = actions.GET_BOOKS;
    constructor(public payload: any) { }
}

export class getBookByIdAction implements Action {
    readonly type: string = actions.GET_BOOK_BY_ID;
    constructor(public payload: string) { }
}

export class getBookByIdSuccessAction implements Action {
    readonly type: string = actions.GET_BOOK_BY_ID_SUCCESS;
    constructor(public payload: Book) { }
}

export class getBookByIdFailedAction implements Action {
    readonly type: string = actions.GET_BOOK_BY_ID_FAILED;
    constructor(public payload: any) { }
}

export class createBookAction implements Action {
    readonly type: string = actions.CREATE_BOOK;
    constructor(public payload: Book) { }
}

export class createBookSuccessAction implements Action {
    readonly type: string = actions.CREATE_BOOK_SUCCESS;
    constructor(public payload: any) { }
}

export class createBookFailedAction implements Action {
    readonly type: string = actions.CREATE_BOOK_FAILED;
    constructor(public payload: any) { }
}

export class updateBookAction implements Action {
    readonly type: string = actions.UPDATE_BOOK;
    constructor(public payload: { book: Book, id: string }) { }
}

export class updateBookSuccessAction implements Action {
    readonly type: string = actions.UPDATE_BOOK_SUCCESS;
    constructor(public payload: any) { }
}

export class updateBookFailedAction implements Action {
    readonly type: string = actions.UPDATE_BOOK_FAILED;
    constructor(public payload: any) { }
}

export class deleteBookAction implements Action {
    readonly type: string = actions.DELETE_BOOK;
    constructor(public payload: string) { }
}

export class deleteBookSuccessAction implements Action {
    readonly type: string = actions.DELETE_BOOK_SUCCESS;
    constructor(public payload: Book) { }
}

export class deleteBookFailedAction implements Action {
    readonly type: string = actions.DELETE_BOOK_FAILED;
    constructor(public payload: any) { }
}

export type booksActions =
    getBooksAction |
    getBooksSuccessAction |
    getBooksFailedAction |

    getBookByIdAction |
    getBookByIdSuccessAction |
    getBookByIdFailedAction |

    createBookAction |
    createBookSuccessAction |
    createBookFailedAction |

    updateBookAction |
    updateBookSuccessAction |
    updateBookFailedAction |

    deleteBookAction |
    deleteBookSuccessAction |
    deleteBookFailedAction;