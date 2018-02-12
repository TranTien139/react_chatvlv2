export const AUTH_USER = 'auth_user',
    UNAUTH_USER = 'unauth_user';

const axios = require('axios');
const domain = require('../../config_domain.js');

export function loginUser(input_login) {
    return function(dispatch) {
        axios.post(domain.domain+'/users/login',input_login).then(res=>{
            res = res.data;
            let token = res.id;
            if(token){
                localStorage.setItem('dangnhap',token);
                dispatch({ type: AUTH_USER, payload: res});
            }
        }).catch(err=>{
        });
    }
}

export function logoutUser() {
    return function (dispatch) {
        axios.post(domain.domain+'/users/logout?access_token='+localStorage.getItem('dangnhap')).then(data=>{
            localStorage.removeItem('dangnhap');
            dispatch({ type: UNAUTH_USER });
        }).catch(err=>{

        });
    }
}