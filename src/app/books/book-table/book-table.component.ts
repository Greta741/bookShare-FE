import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../utils/interfaces';

@Component({
    selector: 'book-table',
    templateUrl: './book-table.component.html',
})
export class BookTableComponent implements OnInit {
    @Input() public books: Book[];
    @Input() public userId: string;
    public userBooksOnly = false;

    ngOnInit() { }

    public filterBooks() {
        this.userBooksOnly = !this.userBooksOnly;
    }
}