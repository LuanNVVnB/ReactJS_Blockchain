import { ALL_OUT_COMES, POST_USER_VOTED } from "../../actions/outcome/index";

const initialState = {
   outcome:{},
   outcomeVoted:{},
 
};

export function outcomeReducer(state = initialState, action) {
    switch (action.type) {
       
        case ALL_OUT_COMES :
            return{
                ...state,
                outcome: action.payload
            };
        case POST_USER_VOTED:
            console.log("votedure", action.payload);
            return {
                ...state,
                outcomeVoted: action.payload
            };
        

        default:
            return state;
    }


}



export default outcomeReducer;