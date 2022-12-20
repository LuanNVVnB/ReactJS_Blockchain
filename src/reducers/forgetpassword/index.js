import {FORGOT_PASSWORD_INPUT, STATUS_FORGOT_PASWORD, SET_CHANGE_TOKEN,RESET_DO_RESET,SET_CHANGE_AUTH_PASSWORD} from "../../actions/forgot-password/index";

const initialState = {
    userforgot: {},
    statusForgot: 0,
    formAuth:{
        payload: '',
        token: ''
    },
    formAuthPass:{
        email: '',
        password: ''
    },
    accessToken:false
};

export function forgotReducer(state = initialState, action) {
    switch (action.type) {
       
        case FORGOT_PASSWORD_INPUT :
            return{
                ...state,
                userforgot: action.payload
            };
        case SET_CHANGE_TOKEN:
            console.log(action.payload)
            let newObj = state.formAuth;
            newObj.payload = state.userforgot;
            newObj.token = action.payload ? action.payload : '';
            return{
                ...state,
                formAuth: newObj
            }
        case STATUS_FORGOT_PASWORD:
            return{
                ...state,
                statusForgot: action.payload

            }
         case RESET_DO_RESET:
             console.log("actions==== ",action.payload)
            return{
                ...state,
                accessToken: action.payload
            };
        case SET_CHANGE_AUTH_PASSWORD:
            let newAuth = state.formAuthPass;
            newAuth.emailReset = state.userforgot.email;
            newAuth.passwordReset = action.payload;
            return{
                ...state,
                formAuthPass: newAuth
            }

        default:
            return state;
    }


}



export const getUserForgot = state => state.ForgotPage.userforgot;
export const getStatusForgot = state => state.ForgotPage.statusForgot;
export const getAuthCode = state => state.ForgotPage.formAuth;
export const getIsAuth = state => state.ForgotPage.accessToken;
export const getAuthPass = state => state.ForgotPage.formAuthPass;

export default forgotReducer;