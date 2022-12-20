import {
    getAllPermission,
    openModalAddPermission,
    setValuePermission,
} from "./index";
import * as CONFIG from '../../config/configUrl'
import * as $http from '../../utils/httpProvider';
import { Notification, MessageBox } from "element-react";

export const fnAddPermission = (request) => {
    return dispatch => {
        $http.postData(CONFIG.API_BASE_URL + `/rest/permission-type`, request)
            .then(res => {
                dispatch(fnGetAllPermission());
                dispatch(fnOpenModalAddPermission(false));
                Notification({
                    title: 'Success',
                    message: 'Add permission success',
                    type: 'success'
                })
                return res;
            }).catch(error => {
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail,
                    type: 'error'
                })
            })
    }
};

export const fnGetAllPermission = () => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + `/rest/permission-type/search?code=&startAt=0&maxResults=100`)
            .then(res => {
                dispatch(getAllPermission(res.data));
                return res.data;
            }).catch(error => {
                throw error;
            })
    }
};

export const fnDeletePermission = (code) => {
    return dispatch => {
        MessageBox.confirm('This will delete permission. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
        }).then(() => {
            $http.deleteData(CONFIG.API_BASE_URL + `/rest/permission-type?code=` + code)
                .then(res => {
                    dispatch(fnGetAllPermission());
                    Notification({
                        title: 'Success',
                        message: 'Remove permission success',
                        type: 'success'
                    })
                    return res;
                }).catch(error => {
                    throw error;
                })
        }).catch((error) => {
            Notification({
                title: 'Errors',
                message: error.response.data.errorDetail,
                type: 'error'
            })
        });

    }
};

export const fnsetValuePermission = (data) => {
    return dispatch => dispatch(setValuePermission(data));
};

export const fnOpenModalAddPermission = (flag) => {
    return dispatch => {
        dispatch(openModalAddPermission(flag));
    }
};

export const fnCheckPermission = (userName, objectType, permissionType) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/rest/permission/check-permission?userName=" + userName + "&objectType=" + objectType + "&permissionType=" + permissionType)
            .then(res => {
                let permission = res.data.hasPermission;
                if (!permission) {
                    window.location.href = "#/no-permission";
                }
                return res.data;
            }).catch(error => {
                throw error;
            })
    }
};
