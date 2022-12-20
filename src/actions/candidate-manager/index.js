export const GET_ALL_CANDIDATES = 'GET_ALL_CANDIDATES';
export const CREATE_CANDIDATES = 'CREATE_CANDIDATES';

export const getAllCandidates = (data) => {
    return {
        type: GET_ALL_CANDIDATES,
        payload: data
    }
};

// export const createCandidate = (data) => {
//     return {
//         type: CREATE_CANDIDATES,
//         payload: data
//     }
// };

