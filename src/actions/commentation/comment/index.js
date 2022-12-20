export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
export const ADD_COMMENT_STARTED = "ADD_COMMENT_STARTED";

export const FETCH_COMMENTS_STARTED = "FETCH_COMMENTS_STARTED";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";

export const addCommentSuccess = comment => ({
  type: ADD_COMMENT_SUCCESS,
  payload: {
    comment
  }
});

export const addCommentStarted = () => ({
  type: ADD_COMMENT_STARTED
});

export const addCommentFailure = error => ({
  type: ADD_COMMENT_FAILURE,
  payload: {
    error
  }
});

export const fetchCommentsStarted = () => ({
  type: FETCH_COMMENTS_STARTED
});

export const fetchCommentsSuccess = comments => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments
});

export const fetchCommentsFailure = error => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: { error }
});

export const deleteCommentSuccess = comment => ({
  type: DELETE_COMMENT,
  payload: { ...comment }
});

export const updateCommentSuccess = comment => ({
  type: UPDATE_COMMENT,
  payload: { ...comment }
});
