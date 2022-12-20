import { ADD_RATING_SUCCESS, ADD_RATING_FAILURE, ADD_RATING_STARTED } from "../../../actions/commentation/rating-comment";

import uuid from 'uuid/v4'

const initialState = {
  loading: false,
  refresh: '',
  error: null
};

export default function addRatingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RATING_STARTED:
      return {
        ...state,
        loading: true
      };
    case ADD_RATING_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        refresh: uuid()
      };
    case ADD_RATING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
