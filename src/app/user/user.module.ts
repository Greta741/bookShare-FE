import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HeaderModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
    ]
})
export class UserModule { }