import { DELETE_COMMENT } from "../../../actions/commentation/comment/index";
import uuid from 'uuid/v4'

const initialState = {
  loading: false,
  refresh: ''
};

export default function deleteCommentReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_COMMENT:
      return {
        ...state,
        loading: false,
        refresh: uuid()
      };
    default:
      return state;
  }
}
