import { AUTH_USER, UNAUTH_USER } from '../actions/authAction.js';

const INITIAL_STATE = {content: '', authenticated: false}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case AUTH_USER:
            return { ...state, content: action.payload , authenticated: true };
        case UNAUTH_USER:
            return { ...state, content: '' ,authenticated: false };
        default:
            return state;
    }
    return state;
}
