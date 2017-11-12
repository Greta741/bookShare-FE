import { actions, userActions } from '../actions/userActions';
import {User, UserState} from '../../utils/interfaces';

const initialState: UserState = {
    emailExists: false,
    registerSuccess: null,
    loginSuccess: null,
};

export function userReducer( state = initialState, action: userActions ) {
    switch( action.type ) {
        case actions.REGISTER_USER:
            return Object.assign({}, state, { registerSuccess: null, emailExists: false });
        case actions.REGISTER_USER_SUCCESS:
           return Object.assign({}, state, { registerSuccess: true, emailExists: false});
        case actions.REGISTER_USER_FAILED:
            return Object.assign({}, state, { registerSuccess: null, emailExists: false });
        case actions.USER_EMAIL_EXISTS:
            return Object.assign({}, state, { registerSuccess: false, emailExists: true});
        case actions.LOGIN:
            return Object.assign({}, state, { loginSuccess: null });
        case actions.LOGIN_SUCCESS:
            return Object.assign({}, state, { loginSuccess: true });
        case actions.LOGIN_FAILED:
            return Object.assign({}, state, { loginSuccess: false });
        default:
            return state;
    }
}