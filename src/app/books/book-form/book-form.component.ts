import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cities, types } from '../../utils/constants';
import { Book } from '../../utils/interfaces';

@Component({
    selector: 'book-form',
    templateUrl: './book-form.component.html',
})
export class BookFormComponent implements OnInit, OnChanges {

    public form: FormGroup;
    public cities: string[];
    public types: string[];
    public fieldsInvalid: any;
    @Input() book: Book;
    @Input() edit = false;

    @Output() create: EventEmitter<Book> = new EventEmitter();
    @Output() update: EventEmitter<Book> = new EventEmitter();
    @Output() remove: EventEmitter<any> = new EventEmitter();

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.createForm();
        this.cities = cities;
        this.types = types;
        this.fieldsInvalid = {
            name: false,
            author: false,
            year: false,
            type: false,
            city: false,
            pages: false,
        }
    }

    ngOnChanges() {
        this.createForm();
    }

    public updateValidFields() {
        this.fieldsInvalid = {
            name: this.form.controls.name.value === '',
            author: this.form.controls.author.value === '',
            year: this.form.controls.year.value === null || this.form.controls.year.value < 0,
            type: this.form.controls.types.value === null,
            city: this.form.controls.city.value === null,
            pages: this.form.controls.pages.value === null || this.form.controls.pages.value < 0,
        }
    }

    public save() {
        if (this.form.valid) {
            if (this.edit) {
                this.update.emit(this.form.value);
            } else {
                this.create.emit(this.form.value);
            }
        } else {
            this.updateValidFields();
        }
    }

    public onRemove() {
        this.remove.emit();
    }


    public cancel() {
        console.log('Cancel');
    }

    private createForm() {
        if (this.book) {
            this.form = this.fb.group({
                name: [this.book.name, Validators.required],
                author: [this.book.author, Validators.required],
                year: [this.book.year, Validators.required],
                type: [this.book.type, Validators.required],
                city: [this.book.city, Validators.required],
                pages: [this.book.pages, Validators.required],
                tradable: [this.book.tradable, Validators.required],
                forSell: [this.book.forSell, Validators.required],
                price: [this.book.price, Validators.required]
            });
        } else {
            this.form = this.fb.group({
                name: ['', Validators.required],
                author: ['', Validators.required],
                year: [null, Validators.required],
                type: [null, Validators.required],
                city: [null, Validators.required],
                pages: [null, Validators.required],
                tradable: [true, Validators.required],
                forSell: [false, Validators.required],
                price: [0, Validators.required]
            });
        }
    }
}