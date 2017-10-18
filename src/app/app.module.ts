import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './books/book.module';
import { HeaderModule } from './header/header.module';
import { UserModule } from './user/user.module';
import { BooksEffects } from './store/effects/booksEffects';
import { BooksService } from './store/services/booksService';
import { reducers } from './store/reducers/index';


@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        BookModule,
        HeaderModule,
        UserModule,
        HttpModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([BooksEffects]),
        // StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    declarations: [
        AppComponent
    ],
    providers: [ BooksService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }