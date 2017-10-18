import { Component, Input } from '@angular/core';
import { Book } from "../../utils/interfaces";

@Component({
    selector: 'book-row',
    templateUrl: './book-row.component.html',
    styleUrls: ['./book-row.component.css']
})
export class BookRowComponent {
    @Input() book: Book;
}