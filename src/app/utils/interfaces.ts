export interface Book {
    id?: string,
    name: string,
    author: string,
    year: number,
    type: string,
    city: string,
    pages: number,
    tradable: boolean,
    forSell: boolean,
    price: number,
    userId: string,
    email: string,
    phone: string,
};

export interface User {
    id: string;
    name: string,
    email: string,
    phone: string
    password?: string;
 };

export interface BooksState {
    list: {
        books: Book[],
        loading: boolean,
        success: boolean,
    },
    bookView: {
        book: Book,
        loading: boolean,
        success: boolean,
    },
    bookEdit: {
        loading: boolean,
        success: boolean,
    },
    bookCreate: {
        loading: boolean,
        success: boolean,
    },
    bookDelete: {
        loading: boolean,
        success: boolean,
    }
}

export interface UserState {
    emailExists: boolean;
    registerSuccess: boolean;
    loginSuccess: boolean;
};

 export interface AppState {
    books: BooksState;
    user: UserState;
 };