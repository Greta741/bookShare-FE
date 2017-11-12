import {Injectable, ViewChild} from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {
    actions, getTokenAction, loginFailedAction, loginSuccessAction, registerUserFailedAction,
    registerUserSuccessAction,
    userEmailExistsAction
} from '../actions/userActions';
import { UserService } from '../services/userService';

@Injectable()
export class UserEffects {
    @ViewChild('registerModal') registerModal: any;
    constructor( private actions$ : Actions,
                 private userService : UserService ) {
    }

    @Effect() registerUser$ = this.actions$
        .ofType(actions.REGISTER_USER)
        .switchMap(action => this.userService.registerUser(action['payload']))
        .map(user => {
            if (user.hasOwnProperty('error')) {
                return new userEmailExistsAction();
            }
            return new registerUserSuccessAction(user)
        })
        .catch((e) => Observable.of(new registerUserFailedAction(e)));

    @Effect() login$ = this.actions$
        .ofType(actions.LOGIN)
        .switchMap(action => this.userService.getCode(action['payload']))
        .map(result => {
            return new getTokenAction(result.value);
        })
        .catch((e) => Observable.of(new loginFailedAction(e)));

    @Effect() token$ = this.actions$
        .ofType(actions.GET_TOKEN)
        .switchMap(action => this.userService.getToken(action['payload']))
        .map(result => {
            localStorage.setItem('token', result.token);
            localStorage.setItem('userId', result.userId);
            return new loginSuccessAction();
        })
        .catch((e) => Observable.of(new loginFailedAction(e)));

}