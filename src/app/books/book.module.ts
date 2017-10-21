import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BookFormComponent } from './book-form/book-form.component';
import { BookRowComponent } from './book-row/book-row.component';
import { BookTableComponent } from './book-table/book-table.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookTableContainer } from './book-table/book-table.container';
import { BookFormContainer } from './book-form/book-form.container';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        BookFormComponent,
        BookRowComponent,
        BookTableComponent,
        BookViewComponent,
        BookTableContainer,
        BookFormContainer
    ]
})
export class BookModule { }