import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { BookViewComponent } from './books/book-view/book-view.component';
import { BookTableContainer } from './books/book-table/book-table.container';
import { BookFormContainer } from './books/book-form/book-form.container';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'new', component: BookFormContainer },
    { path: '', component: BookTableContainer },
    { path: 'book/:id', component: BookViewComponent },
    { path: 'edit/:id', component: BookFormContainer },
    { path: '**', component: NotFoundComponent }


];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}