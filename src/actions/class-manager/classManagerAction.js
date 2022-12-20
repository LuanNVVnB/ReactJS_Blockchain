import {
    getAllClass, deleteClass, closeCreateClassDialog, setClassData, setClassUpdateData, setTotal, getInfoClass,
    clearClassDataAdd, setUpdatedClassUpdateData, showClassRemove, setCurrentPage, setPageSize, getAllClassRemove, updateClassRemoveSuccess, setFilter, setDataSearch
} from "./index"
import * as CONFIG from '../../config/configUrl'
import * as $http from '../../utils/httpProvider'
import { Notification, MessageBox } from "element-react";

export const fnGetAllClass = (classname, startAt, pageSize) => {
    var us = classname ? classname : '';
    var sa = startAt ? startAt : 0;
    var ps = pageSize ? pageSize : 10;
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class?classname=" + us + "&startAt=" + sa + "&maxResults=" + ps)
            .then(response => {
                dispatch(fnSetTotal(us));
                dispatch(getAllClass(response.data));
            })
            .catch(error => {
                console.log(error)
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                    type: 'error'
                })
            });
    }
};


export const fnSetTotal = (classname) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/count?classname=" + classname)
            .then(response => {
                dispatch(setTotal(response.data));
                return response.data;
            })
            .catch(error => {
                console.log(error)
            });
    }
}


export const fnGetAllClassRemove = () => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/trash")
            .then(response => {
                dispatch(getAllClassRemove(response.data));
            })
            .catch(error => {
                console.log(error)
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                    type: 'error'
                })
            });
    }
}


export const fnAddClass = (classDataAdd) => {
    return dispatch => {
        const isValid = validate(classDataAdd)
        if (!isValid) {
            return;
        }
        $http.postData(CONFIG.API_BASE_URL + "/v1/rest/class", classDataAdd)
            .then(response => {
                dispatch(fnClassModalDialog(false, ''));
                dispatch(fnGetAllClass());
                dispatch(fnClearSetDataClass());
                Notification({
                    title: 'Success',
                    message: 'Add data successfully',
                    type: 'success'
                })
            })
            .catch(error => {
                console.log(error)
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                    type: 'error'
                })
            });
    }
}

export const fnUpdateClass = (classDataUpdate) => {
    return dispatch => {
        const isValid = validate(classDataUpdate);
        if (!isValid) {
            return;
        }
        $http.putData(CONFIG.API_BASE_URL + "/v1/rest/class/" + classDataUpdate.id, classDataUpdate)
            .then(response => {
                if (response.data.statusCode === 401) {
                    Notification({
                        title: 'Errors',
                        message: response.data.msg,
                        type: 'error'
                    })
                } else {
                    dispatch(fnClassModalDialog(false, ''));
                    dispatch(fnSetUpdatedClassData(classDataUpdate));
                    dispatch(fnClearSetDataClass());
                    Notification({
                        title: 'Success',
                        message: 'Updated data successfully',
                        type: 'success'
                    })
                }

            })
            .catch(error => {
                console.log(error)
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                    type: 'error'
                })
            });
    }
}

export const fnSetFilter = (filter) => {
    return dispatch => dispatch(setFilter(filter));
}

export const fnDeleteClass = (id) => {
    return dispatch => {
        MessageBox.confirm('This will delete class. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
        }).then(() => {
            $http.deleteData(CONFIG.API_BASE_URL + "/v1/rest/class/" + id)
                .then(response => {
                    dispatch(deleteClass(id));
                    dispatch(fnGetAllClassRemove());
                    Notification({
                        title: 'Success',
                        message: 'Class deleted successfully',
                        type: 'success'
                    });
                })
                .catch(error => {
                    console.log(error)
                    Notification({
                        title: 'Errors',
                        message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                        type: 'error'
                    })
                });
        })
    }
};



export const fnRecoverClassRemove = (id) => {
    return dispatch => {
        MessageBox.confirm('This will recover class. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
        }).then(() => {
            $http.putData(CONFIG.API_BASE_URL + "/v1/rest/class/trash/" + id)
                .then(response => {
                    dispatch(updateClassRemoveSuccess(id))
                    dispatch(fnGetAllClass());
                    Notification({
                        title: 'Success',
                        message: 'Class recover successfully',
                        type: 'success'
                    });
                })
                .catch(error => {
                    console.log(error)
                    Notification({
                        title: 'Errors',
                        message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                        type: 'error'
                    })
                });
        })

    }
}

export const fnGetInfoClass = (classId) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/info/" + classId)
            .then(response => {
                dispatch(getInfoClass(response.data));
            })
            .catch(error => {
                console.log(error)
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                    type: 'error'
                })
            });
    }
};

export const fnSetDataClass = (data) => {
    return dispatch => {
        dispatch(setClassData(data));
    }
};

export const fnSetDataUpdateClass = (data) => {
    return dispatch => {
        dispatch(setClassUpdateData(data));
    }
};

export const fnSetUpdatedClassData = (data) => {
    return dispatch => {
        dispatch(setUpdatedClassUpdateData(data));
    }
};

export const fnClearSetDataClass = () => {
    return dispatch => {
        dispatch(clearClassDataAdd());
    }
};

export const fnClassModalDialog = (status, type, id) => {
    return dispatch => {
        dispatch(closeCreateClassDialog(status, type, id));
    }
};

export const fnShowClassRemove = (status) => {
    return dispatch => {
        dispatch(showClassRemove(status));
    }
};

export const fnChangePageSize = (pageSize, paging, filter) => {
    return dispatch => {
        dispatch(setCurrentPage(0));
        dispatch(setPageSize(pageSize));
        dispatch(fnGetAllClass(filter, 0, pageSize));
    }
};

export const fnChangeCurrentPage = (currentPage, paging, filter) => {
    return dispatch => {
        dispatch(setCurrentPage(currentPage));
        dispatch(fnGetAllClass(filter, currentPage - 1, paging.pageSize));
    }
};


export const validate = (data) => {
    let result = true;
    if (data.className === '' || data.className.length === 0 || data.className.length > 350) {
        result = false;
        Notification({
            title: 'Errors',
            message: 'Class name is required',
            type: 'error'
        });
    }
    if (data.description.length > 500) {
        result = false;
        Notification({
            title: 'Errors',
            message: 'Description must be at least 2 to 500 characters ',
            type: 'error'
        });
    }
    return result;
};

export const fnSetDataSearch = (keyword) => {
    return dispatch => {
        dispatch(setDataSearch(keyword));
    }
};



