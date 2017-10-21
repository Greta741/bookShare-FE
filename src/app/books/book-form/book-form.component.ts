import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    @Input() book: Book;
    @Input() edit = false;

    @Output() create: EventEmitter<Book> = new EventEmitter();
    @Output() update: EventEmitter<Book> = new EventEmitter();
    @Output() remove: EventEmitter<any> = new EventEmitter();

    constructor(private fb: FormBuilder,
                private location: Location) {}

    ngOnInit() {
        this.createForm();
        this.cities = cities;
        this.types = types;
    }

    ngOnChanges() {
        this.createForm();
    }

    public save() {
        if (this.form.valid) {
            if (this.edit) {
                this.update.emit(this.form.value);
            } else {
                this.create.emit(this.form.value);
            }
        } else {
            this.form.controls['name'].markAsTouched();
            this.form.controls['author'].markAsTouched();
            this.form.controls['year'].markAsTouched();
            this.form.controls['type'].markAsTouched();
            this.form.controls['city'].markAsTouched();
            this.form.controls['pages'].markAsTouched();
            this.form.controls['price'].markAsTouched();
        }
    }

    public onRemove() {
        this.remove.emit();
    }


    public cancel() {
        this.location.back();
    }

    private createForm() {
        this.form = this.fb.group({
            name: new FormControl(this.book ? this.book.name : '', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50)
            ]),
            author: new FormControl(this.book ? this.book.author : '', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50)
            ]),
            year: new FormControl(this.book ? this.book.year : null, [
                Validators.required,
                Validators.min(1900),
                Validators.max(2017)
            ]),
            type: new FormControl(this.book ? this.book.type : null, [
                Validators.required,
            ]),
            city: new FormControl(this.book ? this.book.city : null, [
                Validators.required,
            ]),
            pages: new FormControl(this.book ? this.book.pages : 0, [
                Validators.required,
                Validators.min(0),
                Validators.max(10000)
            ]),
            tradable: new FormControl(this.book ? this.book.tradable : true, [
                Validators.required,
            ]),
            forSell: new FormControl(this.book ? this.book.forSell : false, [
                Validators.required,
            ]),
            price: new FormControl(this.book ? this.book.price : 0, [
                Validators.required,
                Validators.min(0),
                Validators.max(10000)
            ]),
        });
    }

}