import {
    getAllCandidates,
    createCandidate
} from "./index";
import * as CONFIG from "../../config/configUrl";
import * as $http from "../../utils/httpProvider";
import { Notification, MessageBox } from "element-react";


// CLASS DETAIL 
export const fnGetAllCandidates = () => {
    return dispatch => {
        $http.getData(CONFIG.API_META_MASK_URL + "/get-all-candidates").then((response) => {
            dispatch(getAllCandidates(response.data));

        }).catch((error) => {
            Notification({
                title: 'Errors',
                message: "call candidate Error",
                type: 'error'
            });
        })
    }
};

export const fnCreateCandidate = (candidate) => {
    return dispatch => {
        console.log("candidate--",candidate)
        $http.postData(CONFIG.API_META_MASK_URL + "/create-candidate/", candidate).then((response) => {
            console.log("response--", response);
            if (response.data.code === 'Success') {
                dispatch(fnGetAllCandidates());
                Notification({
                    title: 'Successfull',
                    message: "Successfull",
                    type: 'success'
                });
            }
            else {
                Notification({
                    title: 'Errors',
                    message: " create candidate fail",
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

export const fnUpdateCandidate = (candidate) => {
    return dispatch => {
        $http.putData(CONFIG.API_META_MASK_URL + "/update-candidate/", candidate).then((response) => {
            console.log("response--", response);
            if (response.data.code === 'Success') {
                dispatch(fnGetAllCandidates());
                Notification({
                    title: 'Successfull',
                    message: "Successfull",
                    type: 'success'
                });
            }
            else {
                Notification({
                    title: 'Errors',
                    message: "update fail",
                    type: 'error'
                });
            }

        }).catch((error) => {
            Notification({
                title: 'Errors',
                message: "error try catch",
                type: 'error'
            });
        })
    }
};

export const fnDeleteCandidate = (id) => {
    return dispatch => {
        $http.deleteData(CONFIG.API_META_MASK_URL + `/delete-candidate/${id}`).then((response) => {
            console.log("responsedelete--", response);
            if (response.data.code === 'Success') {
                dispatch(fnGetAllCandidates());
                Notification({
                    title: 'Successfull',
                    message: "Successfull",
                    type: 'success'
                });
            }
            else {
                Notification({
                    title: 'Errors',
                    message: "update fail",
                    type: 'error'
                });
            }

        }).catch((error) => {
            Notification({
                title: 'Errors',
                message: "error try catch",
                type: 'error'
            });
        })
    }
};

