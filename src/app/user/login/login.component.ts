import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    public fieldsInvalid: any;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.fieldsInvalid = {
            email: false,
            password: false
        }
    }

    public updateValidFields() {
        this.fieldsInvalid = {
            email: Validators.email(this.form.controls.email) !== null,
            password: this.form.controls.password.value === ''
        }
    }

    public login() {
        this.updateValidFields();
        console.log(this.fieldsInvalid);
        console.log(this.form.value);
    }

    public cancel() {
        console.log('Cancel');
    }

}