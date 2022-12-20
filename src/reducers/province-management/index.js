import * as ACTIONS from '../../actions/province-manager/index';
const initialState = {
    // CLASS_DETAILS

    provinceData: []

};



export function provinceManagerReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.GET_ALL_PROVINCE:
            console.log("payload--", action.payload)
            return {
                ...state,
                provinceData: action.payload.data
            };


        default: return state;
    }
};


export default provinceManagerReducer;