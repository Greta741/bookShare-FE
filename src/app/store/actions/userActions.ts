import { Action } from "@ngrx/store";
import { User } from "../../utils/interfaces";

export const actions = {
    REGISTER_USER: "REGISTER_USER",
    REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
    REGISTER_USER_FAILED: "REGISTER_USER_FAILED",

    USER_EMAIL_EXISTS: "USER_EMAIL_EXISTS",

    LOGIN: "LOGIN",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILED: "LOGIN_FAILED",

    GET_TOKEN: "GET_TOKEN",
};

export class registerUserAction implements Action {
    readonly type: string = actions.REGISTER_USER;
    constructor(public payload: User) { }
}

export class registerUserSuccessAction implements Action {
    readonly type: string = actions.REGISTER_USER_SUCCESS;
    constructor(public payload: any) { }
}

export class registerUserFailedAction implements Action {
    readonly type: string = actions.REGISTER_USER_FAILED;
    constructor(public payload: any) { }
}

export class userEmailExistsAction implements Action {
    readonly type: string = actions.USER_EMAIL_EXISTS;
    public payload: any;
    constructor() { }
}

export class loginAction implements Action {
    readonly type: string = actions.LOGIN;
    constructor(public payload: { email: string, password: string }) { }
}

export class loginSuccessAction implements Action {
    readonly type: string = actions.LOGIN_SUCCESS;
    public payload: any;
    constructor() { }
}

export class loginFailedAction implements Action {
    readonly type: string = actions.LOGIN_FAILED;
    constructor(public payload: any) { }
}

export class getTokenAction implements Action {
    readonly type: string = actions.GET_TOKEN;
    constructor(public payload: string) { }
}

export type userActions =
    registerUserAction |
    registerUserSuccessAction |
    registerUserFailedAction |

    userEmailExistsAction |

    loginAction |
    loginSuccessAction |
    loginFailedAction |

    getTokenAction;