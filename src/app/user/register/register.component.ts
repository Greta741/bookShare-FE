import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'register',
    templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

    public form: FormGroup;
    public fieldsInvalid: any;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.form = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            password: ['', Validators.required],
            repeatPassword: ['', Validators.required]
        });
        this.fieldsInvalid = {
            name: false,
            email: false,
            phone: false,
            password: {
                invalid: false,
                length: false
            },
            repeatPassword: {
                invalid: false,
                length: false
            },
            passwordsMatch: false
        }
    }

    public updateValidFields() {
        this.fieldsInvalid = {
            name: this.form.controls.name.value === '',
            email: Validators.email(this.form.controls.email) !== null,
            phone: this.form.controls.phone.value < 100000000
                    || this.form.controls.phone.value >= 999999999
                    || this.form.controls.phone.value === '',
            password: {
                invalid: this.form.controls.password.value === '',
                length: this.form.controls.password.value.length < 8
            },
            repeatPassword: {
                invalid: this.form.controls.repeatPassword.value === '',
                length: this.form.controls.repeatPassword.value.length < 8
            },
            passwordsMatch: this.form.controls.password.value !== this.form.controls.repeatPassword.value
        }
    }


    public register() {
        this.updateValidFields();
        console.log(this.fieldsInvalid);
        console.log(this.form.value);
    }

    public cancel() {
        console.log('Cancel');
    }

}