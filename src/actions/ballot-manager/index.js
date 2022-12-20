export const CREATE_BALLOT_OPEN = 'CREATE_BALLOT_OPEN';
export const GET_ALL_BALLOT = 'GET_ALL_BALLOT';
export const CREATE_BALLOT = 'CREATE_BALLOT';
export const GET_ALL_BALLOT_VOTE = 'GET_ALL_BALLOT_VOTE';
export const CREATE_BALLOT_CLOSSES = 'CREATE_BALLOT_CLOSSES';
export const GET_BALLOT_DEPLOY = 'GET_BALLOT_DEPLOY';

export const createBallotOpens = (formData) => {
    return {
        type: CREATE_BALLOT_OPEN,
        payload: formData
    }
};

export const getBallotDeploy = (formData) => {
    return {
        type: GET_BALLOT_DEPLOY,
        payload: formData
    }
}

export const createBallot = (formData) => {
    return {
        type: CREATE_BALLOT,
        payload: formData
    }
};

export const createBallotClosses = () => {
    return {
        type: CREATE_BALLOT_CLOSSES,
       
    }
};

export const getAllBallots = (formData) => {
    return {
        type: GET_ALL_BALLOT,
        payload: formData
    }
}

export const getAllBallotsVote = (formData) => {
    return {
        type: GET_ALL_BALLOT_VOTE,
        payload: formData
    }
}


