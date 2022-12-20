import {
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_STARTED
} from "../../../actions/commentation/comment/index";

import uuid from 'uuid/v4'

const initialState = {
  loading: false,
  error: null,
  refresh: ''
};

export default function addCommentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT_STARTED:
      return {
        ...state,
        loading: true
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        refresh: uuid()
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
