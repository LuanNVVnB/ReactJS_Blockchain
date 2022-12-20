import {
    getAllProvinces,
} from "./index";
import * as CONFIG from "../../config/configUrl";
import * as $http from "../../utils/httpProvider";
import { Notification, MessageBox } from "element-react";


// CLASS DETAIL 
export const fnGetAllProvinces = () => {
    return dispatch => {
        $http.getData(CONFIG.API_META_MASK_URL + "/get-all-provinces").then((response) => {
            console.log("response",response);
            dispatch(getAllProvinces(response.data));

        }).catch((error) => {
            Notification({
                title: 'Errors',
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: 'error'
            });
        })
    }
};

export const fnCreateProvince = (Province) => {
    return dispatch => {
        console.log("Province--", Province)
        $http.postData(CONFIG.API_META_MASK_URL + "/create-province/", Province).then((response) => {
            console.log("response--", response);
            if (response.data.code === 'Success') {
                dispatch(fnGetAllProvinces());
                Notification({
                    title: 'Successfull',
                    message: "Successfull",
                    type: 'success'
                });
            }
            else {
                Notification({
                    title: 'Errors',
                    message: " create Province fail",
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

export const fnUpdateProvince = (Province) => {
    return dispatch => {
        $http.putData(CONFIG.API_META_MASK_URL + "/update-province/", Province).then((response) => {
            console.log("response--", response);
            if (response.data.code === 'Success') {
                dispatch(fnGetAllProvinces());
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

export const fnDeleteProvince = (id) => {
    return dispatch => {
        $http.deleteData(CONFIG.API_META_MASK_URL + `/delete-province/${id}`).then((response) => {
            console.log("responsedelete--", response);
            if (response.data.code === 'Success') {
                dispatch(fnGetAllProvinces());
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

