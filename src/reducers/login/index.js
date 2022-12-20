import {LOGIN_DO_LOGIN, LOGIN_USER_INPUT} from "../../actions/login";

const initialState = {
    user: null,
    accessToken: null,
};

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_DO_LOGIN:
            return{
                ...state,
                accessToken: action.payload,
            };
        case LOGIN_USER_INPUT :
            return{
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}

export const getUser = state => state.LoginPage.user;
export const getAccessToken = state => state.LoginPage.accessToken;

export default loginReducer;