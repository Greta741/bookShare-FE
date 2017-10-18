import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { cities, types } from '../../utils/constants';

@Component({
    selector: 'search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

    public form: FormGroup;
    public cities: string[];
    public types: string[];

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.form = this.fb.group({
            query: '',
            city: null,
            types: null
        });
        this.cities = cities;
        this.types = types;
    }

    public search() {
        console.log(this.form.value);
    }
}