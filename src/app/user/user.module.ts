import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from "@angular/router";


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HeaderModule,
        RouterModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
    ]
})
export class UserModule { }