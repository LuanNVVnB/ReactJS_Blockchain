import * as CONFIG from "../../../config/configUrl";
import * as $http from "../../../utils/httpProvider";
import { fnFetchComments } from "../comment/commentActions";
import { addRatingSuccess, addRatingStarted, addRatingFailure, fetchRating, changeRatingData, closeModalRating, openModalRating, loadRatingData } from "./index";

export const fnAddRating = ({
    id,
    commentID,
    ratingNumber,
    checkRating,
    pageURL,
    username
}) => {
    return dispatch => {
        dispatch(addRatingStarted());
        if (checkRating) {
            let data = {
                id,
                commentID,
                ratingNumber,
                username
            };
            $http
                .putData(CONFIG.API_BASE_URL + "/ratings", data)
                .then(response => {
                    dispatch(addRatingSuccess(response.data));
                    dispatch(fnFetchComments(pageURL));
                })
                .catch(error => {
                    dispatch(addRatingFailure(error.message));
                });
        } else {
            $http
                .postData(CONFIG.API_BASE_URL + "/ratings", {
                    commentID,
                    ratingNumber,
                    username
                })
                .then(response => {
                    dispatch(addRatingSuccess(response.data));
                    dispatch(fnFetchComments(pageURL));
                })
                .catch(error => {
                    dispatch(addRatingFailure(error.message));
                });
        }
    };
};

export const fnFetchRating = (commentID, username) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/ratings" + `?commentID=${commentID}` + `&username=${username}`
        )
            .then(response => {
                console.log(response.data);
                if (response.data !== null && response.data !== undefined) {
                    dispatch(fetchRating(response.data));
                } else {
                    dispatch(fetchRating(null));
                }
                dispatch(openModalRating());
            })
            .catch(error => {
                console.log("fnFetchRatings ERROR", error);
            });
    };
};

export const fnChangeRatingData = formRating => {
    return dispatch => {
        dispatch(changeRatingData(formRating));
    };
};

export const fnToggleModalRating = flag => {
    return dispatch => {
        if (flag) {
            dispatch(openModalRating());
        } else {
            dispatch(closeModalRating());
        }
    };
};

export const fnLoadRatingData = ratingData => {
    return dispatch => {
        dispatch(loadRatingData(ratingData));
    };
};
