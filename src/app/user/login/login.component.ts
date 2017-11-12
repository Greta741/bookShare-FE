import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import {Store} from "@ngrx/store";
import {AppState} from "../../utils/interfaces";
import {loginAction} from "../../store/actions/userActions";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    public failedLogin = false;

    constructor(private fb: FormBuilder,
                private location: Location,
                private router: Router,
                private store: Store<AppState>) {}

    ngOnInit() {
        this.store.select('user', ).subscribe(user => {
            if (user['loginSuccess']) {
                this.router.navigateByUrl('/');
                window.location.reload();
            }
            if (!user['loginSuccess'] && user['loginSuccess'] !== null) {
                this.failedLogin = true;
                this.form.controls['email'].setValue('');
                this.form.controls['password'].setValue('');
            }
        });
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
            this.store.dispatch(new loginAction(this.form.value));
        } else {
            this.form.controls['email'].markAsTouched();
            this.form.controls['password'].markAsTouched();
        }
    }

    public cancel() {
        this.location.back();
    }

}