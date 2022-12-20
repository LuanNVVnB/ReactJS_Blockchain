import {REGISTER_DO_REGISTER} from "../../actions/register";

const initialState = {
    userData: null
};

export function registerReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_DO_REGISTER:
            return{
                ...state,
                userData: action.payload
            };
        default:
            return state;
    }
}

export const getUserData = state => state.RegisterPage.userData;

export default registerReducer;