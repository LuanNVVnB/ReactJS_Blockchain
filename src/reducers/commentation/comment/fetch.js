import {
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_STARTED
} from "../../../actions/commentation/comment/index";

const initialState = {
  loading: false,
  comments: [],
  error: null
};

export default function fetchCommentReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        comments: action.payload
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
