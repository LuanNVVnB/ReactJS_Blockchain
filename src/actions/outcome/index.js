export const ALL_OUT_COMES = ' ALL_OUT_COMES';
export const POST_USER_VOTED = 'POST_USER_VOTED';

export function getAllComes(data) {
    return {
        type: ALL_OUT_COMES,
        payload: data
    }
}

export function postUserVoted(data) {
    return {
        type: POST_USER_VOTED,
        payload: data
    }
}