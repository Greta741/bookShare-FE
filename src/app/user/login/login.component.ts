import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    public form: FormGroup;

    constructor(private fb: FormBuilder, private location: Location) {}

    ngOnInit() {
        this.form = this.fb.group({
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(50)
            ]),
        });
    }

    public login() {
        if (this.form.valid) {
            console.log('login');
        } else {
            this.form.controls['email'].markAsTouched();
            this.form.controls['password'].markAsTouched();
        }
    }

    public cancel() {
        this.location.back();
    }

}