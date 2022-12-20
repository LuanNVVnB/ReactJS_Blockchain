import * as ACTIONS from '../../actions/ballot-manager/index';
const initialState = {
    // CLASS_DETAILS
    openCreateBallot: false,
    formDataBallot:{},
    ballotData:[],
    ballotVote:[],
    ballotDeploy:{}
    
};




export function ballotManagerReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.GET_BALLOT_DEPLOY:
            console.log("Depeloyballot ----")
            return {
                ...state,
                openCreateBallot: true,
                ballotDeploy: action.payload
            };


        case ACTIONS.CREATE_BALLOT_OPEN:
            console.log("openCreateBallot run ----")
            return {
                ...state,
                openCreateBallot: true,
                formDataBallot: action.payload
            };

        case ACTIONS.CREATE_BALLOT_CLOSSES:
            console.log("openCreateBallot run ---- false", state.openCreateBallot)
            return {
                ...state,
                openCreateBallot: false,
            };
        case ACTIONS.GET_ALL_BALLOT:
            return {
                ...state,
                openCreateBallot: false,
                ballotData: action.payload.data
            };
            
        case ACTIONS.GET_ALL_BALLOT_VOTE:
            console.log("payload--voted", action.payload.data[0])
            return {
                ...state,
                openCreateBallot: false,
                ballotVote: action.payload.data
            };
       
        default: return state;
    }
};


export default ballotManagerReducer;