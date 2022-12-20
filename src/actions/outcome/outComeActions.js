import {
    getAllComes,
    postUserVoted
} from "./index";
import * as CONFIG from '../../config/configUrl'
import * as $http from '../../utils/httpProvider';
import { Notification } from "element-react";

export const fnGetOutComes = (request) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + `/rest/result?user_id=${request}`)
            .then(res => {
                dispatch(getAllComes(res.data));
            }).catch(error => {
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail,
                    type: 'error'
                })
            })
    }
};


export const fnUserVoted = ({ id, etherId }) => {
    return dispatch => {
        $http.postData(CONFIG.API_META_MASK_URL + "/user-voted/", { id, etherId })
            .then((response) => {
                console.log("response",response);
                if (response.data.code === 'Success') {
                    dispatch(postUserVoted(response.data.data));
                    Notification({
                        title: 'Successfull',
                        message: "Successfull",
                        type: 'success'
                    });
                    window.location.href = "#/client";
                }
                else {
                    Notification({
                        title: 'Errors',
                        message: " voted fail",
                        type: 'error'
                    });
                }


            }).catch((error) => {
                Notification({
                    title: 'Errors',
                    message: "error user exits or parameters are invalid",
                    type: 'error'
                });
            })

    }
};

export const fnUserVotedPublic = ({ userId, ballotId, etherId, time }) => {
    return dispatch => {
        $http.postData(CONFIG.API_META_MASK_URL + "/post-public/", { userId, ballotId, etherId, time })
            .then((response) => {
                console.log("response", response);
                if (response.data.code === 'Success') {
                    dispatch(postUserVoted(response.data.data));
                    Notification({
                        title: 'Successfull',
                        message: "Successfull",
                        type: 'success'
                    });
                    window.location.href = "#/client";
                    
                }
                else {
                    Notification({
                        title: 'Errors',
                        message: " voted fail",
                        type: 'error'
                    });
                }


            }).catch((error) => {
                Notification({
                    title: 'Errors',
                    message: "error user exits or parameters are invalid",
                    type: 'error'
                });
            })

    }
};


