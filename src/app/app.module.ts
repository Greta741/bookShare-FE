import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule} from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './books/book.module';
import { HeaderModule } from './header/header.module';
import { UserModule } from './user/user.module';
import { NotFoundModule } from './not-found/not-found.module';
import { BooksEffects } from './store/effects/booksEffects';
import { BooksService } from './store/services/booksService';
import { reducers } from './store/reducers/index';
import { UserEffects } from "./store/effects/userEffects";
import { UserService } from "./store/services/userService";
import { FooterModule } from "./footer/footer.module";

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        BookModule,
        HeaderModule,
        UserModule,
        NotFoundModule,
        FooterModule,
        HttpModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([BooksEffects, UserEffects]),
        StoreDevtoolsModule.instrument()
    ],
    declarations: [
        AppComponent
    ],
    providers: [ BooksService, UserService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
