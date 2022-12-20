import * as ACTIONS from '../../actions/candidate-manager/index';
const initialState = {
    // CLASS_DETAILS
    candidateData: [],
    
};



export function candidateManagerReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.GET_ALL_CANDIDATES:
            console.log("reducer", action.payload)
            return {
                ...state,
                candidateData: action.payload.data
            };
       
        default: return state;
    }
};

export default candidateManagerReducer;