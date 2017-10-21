import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

    public form: FormGroup;

    constructor(private fb: FormBuilder, private location: Location) {}

    ngOnInit() {
        this.form = this.fb.group({
            name: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50)
                ]),
            email: new FormControl('', [
                Validators.required,
                Validators.email
                ]),
            phone: new FormControl('', [
                Validators.required,
                Validators.min(100000000),
                Validators.max(999999999)
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(50)
            ]),
            repeatPassword: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(50)
            ]),
        });
    }

    get passwordMatch() {
        return this.form.controls['password'].value === this.form.controls['repeatPassword'].value;
    }

    public register() {
        if (this.form.valid && this.passwordMatch) {
            console.log('register');
        } else {
            this.form.controls['name'].markAsTouched();
            this.form.controls['email'].markAsTouched();
            this.form.controls['phone'].markAsTouched();
            this.form.controls['password'].markAsTouched();
            this.form.controls['repeatPassword'].markAsTouched();
        }
    }

    public cancel() {
        this.location.back();
    }

}
