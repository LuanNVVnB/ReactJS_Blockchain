

export const ADD_RATING_STARTED = "ADD_RATING_STARTED";
export const ADD_RATING_SUCCESS = "ADD_RATING_SUCCESS";
export const ADD_RATING_FAILURE = "ADD_RATING_FAILURE";
export const FETCH_RATING = "FETCH_RATING";
export const RATING_CHANGE_DATA = "RATING_CHANGE_DATA";
export const OPEN_MODAL_RATING = "OPEN_MODAL_RATING";
export const CLOSE_MODAL_RATING = "CLOSE_MODAL_RATING";
export const UPDATE_CURRENT_RATING_ID = "UPDATE_CURRENT_RATING_ID";

export const addRatingSuccess = rating => ({
  type: ADD_RATING_SUCCESS,
  payload: {
    ...rating
  }
});

export const addRatingStarted = () => ({
  type: ADD_RATING_STARTED
});

export const addRatingFailure = error => ({
  type: ADD_RATING_FAILURE,
  payload: {
    error
  }
});

export const fetchRating = rating => ({
  type: FETCH_RATING,
  payload: rating

});

export function changeRatingData(formRating) {
  return {
    type: RATING_CHANGE_DATA,
    payload: formRating
  }
}

export function openModalRating() {
  return {
    type: OPEN_MODAL_RATING,
    payload: true
  }
}

export function closeModalRating() {
  return {
    type: CLOSE_MODAL_RATING,
    payload: false
  }
}

export function loadRatingData(commentId) {
  return {
    type: UPDATE_CURRENT_RATING_ID,
    payload: commentId
  }
}