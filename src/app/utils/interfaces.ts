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
    userDetails?: User
};

export interface User {
    name: string,
    email: string,
    phone: string
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

 export interface AppState {
    books: BooksState
 };