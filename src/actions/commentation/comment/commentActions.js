import {
  addCommentFailure,
  addCommentStarted,
  addCommentSuccess,
  deleteCommentSuccess,
  fetchCommentsFailure,
  fetchCommentsStarted,
  fetchCommentsSuccess,
  updateCommentSuccess
} from "./index";
import * as CONFIG from "../../../config/configUrl";
import * as $http from "../../../utils/httpProvider";

// add comment action
export const fnAddComment = ({ parentID, content, username, pageURL }) => {
  return dispatch => {
    dispatch(addCommentStarted());
    $http
      .postData(
        CONFIG.API_BASE_URL + "/comments",
        {
          parentID,
          content,
          username,
          pageURL
        },
        { "Content-type": "application/json" }
      )
      .then(response => {
        dispatch(addCommentSuccess(response.data));
      })
      .catch(error => {
        dispatch(addCommentFailure(error.message));
      });
  };
};

// fetch comment action
export const fnFetchComments = pageURL => {
  return dispatch => {
    dispatch(fetchCommentsStarted());
    $http
      .getData(CONFIG.API_BASE_URL + "/comments" + `?pageURL=${pageURL}`)
      .then(response => {
        dispatch(fetchCommentsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchCommentsFailure(error.message));
      });
  };
};

// delete comment action
export const fnDeleteComment = (commentID, pageURL) => {
  return dispatch => {
    dispatch(fetchCommentsStarted());
    $http
      .deleteData(CONFIG.API_BASE_URL + "/comments" + `/${commentID}`)
      .then(response => {
        dispatch(deleteCommentSuccess(response.data));
        dispatch(fnFetchComments(pageURL));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

// update comment action
export const fnUpdateComment = (commentID, comment, pageURL) => {
  return dispatch => {
    $http
      .putData(CONFIG.API_BASE_URL + "/comments", { commentID, comment })
      .then(response => {
        dispatch(updateCommentSuccess(response.data));
        dispatch(fnFetchComments(pageURL));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
