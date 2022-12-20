
export const FORGOT_PASSWORD_INPUT = 'FORGOT_PASSWORD_INPUT';
export const RESET_PASSWORD_INPUT = 'RESET_PASSWORD_INPUT';
export const STATUS_FORGOT_PASWORD  = 'STATUS_FORGOT_PASWORD'
export const RESET_DO_RESET= 'RESET_DO_RESET';
export const SET_CHANGE_TOKEN = 'SET_CHANGE_TOKEN';
export const SET_CHANGE_AUTH_PASSWORD = 'SET_CHANGE_AUTH_PASSWORD';

export function userForgot(data) {
    return{
        type: FORGOT_PASSWORD_INPUT,
        payload: data
    }
};

export function userReset(data) {
    return{
        type: RESET_PASSWORD_INPUT ,
        payload: data
    }
}

export function statusForgotPasword (status){
    return{
        type: STATUS_FORGOT_PASWORD,
        payload: status
    }
}


export function doResetPassword(accessToken) {
    return{
        type: RESET_DO_RESET,
        payload: accessToken
    }
}

export function changeInput(token){
    return{
        type: SET_CHANGE_TOKEN,
        payload: token
    }
}

export function changeAuthPassword(value){
    return {
        type: SET_CHANGE_AUTH_PASSWORD,
        payload: value
    }
}