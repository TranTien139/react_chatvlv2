import { AUTH_USER, UNAUTH_USER } from '../actions/authAction.js';

export default function (state = {content: '', authenticated: false}, action) {
    switch(action.type) {
        case AUTH_USER:
            return { ...state, content: action.payload , authenticated: true };
            break;
        case UNAUTH_USER:
            return { ...state, content: '' ,authenticated: false };
            break;
        default:
            return state;
            break;
    }
    return state;
}
