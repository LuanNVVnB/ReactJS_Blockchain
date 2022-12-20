import { UPDATE_COMMENT } from "../../../actions/commentation/comment/index";

import uuid from "uuid/v4";

const initialState = {
  loading: false,
  comment: '',
  refresh: ''
};

export default function updateCommentReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.payload,
        loading: true,
        refresh: uuid()
      };
    default:
      return state;
  }
}
