import {
    getAllObjectType,
    openModalAddObjectType,
    setValueObjectType,
    getObjectTypesById,
    setValueUpdateObjectType,
    openModalUpdateObjectType,
    loadEditPermissionUpdate,
    setValuePermission,
    openModalUpdatePermissions,
    getAllPermission,
} from "./index";
import * as CONFIG from '../../config/configUrl'
import * as $http from '../../utils/httpProvider';
import { Notification, MessageBox } from "element-react";

export const fnAddObjectType = (request) => {
    return dispatch => {
        $http.postData(CONFIG.API_BASE_URL + `/rest/object-type`, request)
            .then(res => {
                dispatch(fnGetAllObjectType());
                dispatch(fnOpenModalAddObjectType(false));
                Notification({
                    title: 'Success',
                    message: 'Create ObjectType success',
                    type: 'success'
                });
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
export const fnUpdateObjectType = (request) => {
    return dispatch => {
        $http.putData(CONFIG.API_BASE_URL + `/rest/object-type`, request)
            .then(res => {
                dispatch(fnGetAllObjectType());
                dispatch(fnOpenModalUpdateObjectType(false));
                Notification({
                    title: 'Success',
                    message: 'Update ObjectType success',
                    type: 'success'
                });
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

export const fnEditPermission = (code, permissionTypeCodes) => {
    return dispatch => {
        let dataSelected = { code, permissionTypeCodes };
        $http.putData(CONFIG.API_BASE_URL + `/rest/object-type/setPermissionType`, dataSelected)
            .then(res => {
                dispatch(fnGetAllObjectType());
                dispatch(openModalUpdatePermissions(false));
                Notification({
                    title: 'Success',
                    message: 'Edit Permission success',
                    type: 'success'
                });
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
        $http.getData(CONFIG.API_BASE_URL + "/rest/permission-type/search?maxResults=999999")
            .then(response => {
                dispatch(getAllPermission(response.data));
                return response.data
            })
            .catch(error => {
                console.log(error)
            });
    }
};
export const fnLoadEditPermissionUpdate = (row) => {
    let PermissionTypeCode = row.PermissionTypes === null ? [] : row.PermissionTypes;
    let objCode = row.code === null ? '' : row.code;
    let perCode = [];
    PermissionTypeCode.forEach(data => {
        perCode.push(data.code);
    })
    return dispatch => {
        dispatch(loadEditPermissionUpdate({ objCode, perCode }));
        dispatch(openModalUpdatePermissions(true));
    }
};
export const fnGetObjectTypesById = (code) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/rest/object-type/get?code=" + code)
            .then(response => {
                dispatch(getObjectTypesById(response.data[0]));
                dispatch(fnOpenModalUpdateObjectType(true));
                return response.data
            })
            .catch(error => {
                console.log(error)
            });
    }
};

export const fnGetAllObjectType = () => {
    // const today = new Date();
    // const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    //startAt=0&maxResults=9999
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + `/rest/object-type/search-permissions?code=` + 'ALL')
            .then(res => {
                dispatch(getAllObjectType(res.data.data));
                return res.data.data;
            }).catch(error => {
                throw error;
            })
    }
};

export const fnDeleteObjectType = (code) => {
    return dispatch => {
        MessageBox.confirm('This will delete objectType. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
        }).then(() => {
            $http.deleteData(CONFIG.API_BASE_URL + `/rest/object-type?code=` + code)
                .then(res => {
                    dispatch(fnGetAllObjectType());
                    Notification({
                        title: 'Success',
                        message: 'Remove objectType success',
                        type: 'success'
                    })
                    return res;
                }).catch(error => {
                    throw error;
                })
        }).catch(() => {
            Notification({
                title: 'Info',
                message: 'Remove canceled',
                type: 'info'
            });
        });

    }
};
export const fnOpenModalUpdatePermissions = (flag) => {
    return dispatch => {
        dispatch(openModalUpdatePermissions(flag));
        if (!flag) {
            dispatch(fnsetValuePermission({ key: "perCode", value: [] }));
        }
    }
};
export const fnOpenModalUpdateObjectType = (flag) => {
    return dispatch => {
        dispatch(openModalUpdateObjectType(flag));
    }
};
export const fnsetValueObjectType = (data) => {
    return dispatch => dispatch(setValueObjectType(data));
};
export const fnSetValueUpdateObjectType = (data) => {
    return dispatch => dispatch(setValueUpdateObjectType(data));
};
export const fnOpenModalAddObjectType = (flag) => {
    return dispatch => {
        if (flag) {
            dispatch(fnGetAllObjectType());
        }
        dispatch(openModalAddObjectType(flag));
    }
};
export const fnsetValuePermission = (data) => {
    return dispatch => dispatch(setValuePermission(data));
};

