export const LOGIN_DO_LOGIN = 'LOGIN_DO_LOGIN';
export const LOGIN_USER_INPUT = 'LOGIN_USER_INPUT';

export function doLogin(accessToken) {
    return{
        type: LOGIN_DO_LOGIN,
        payload: accessToken
    }
}

export function userInput(data) {
    return{
        type: LOGIN_USER_INPUT,
        payload: data
    }
}