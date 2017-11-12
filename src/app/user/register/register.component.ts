import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Store } from "@ngrx/store";
import { AppState } from "../../utils/interfaces";
import { registerUserAction } from "../../store/actions/userActions";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public form: FormGroup;
    public emailExists = false;
    public previousEmail: string;
    public showModal = false;

    constructor(private fb: FormBuilder,
                private location: Location,
                private store: Store<AppState>) {}

    ngOnInit() {
        this.store.select('user', ).subscribe(user => {
            this.emailExists = user['emailExists'];
            if (user['registerSuccess']) {
                this.showModal = true;
            }
        });
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
            this.previousEmail = this.form.controls['email'].value;
            this.store.dispatch(new registerUserAction(this.form.value));
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
