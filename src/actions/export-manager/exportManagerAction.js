import * as CONFIG from "../../config/configUrl"
import * as $http from "../../utils/httpProvider"
import { Notification, MessageBox } from "element-react";
import { setDataExport, setDataExportByName, setShowDialog, setUpdateExport, getDataExportUpdate } from "./index";
import FileSaver from "file-saver";


export const fnGetAllExport = () => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/export/export-type")
            .then(response => {
                dispatch(setDataExport(response.data));
            })
            .catch(error => {
                console.log(error)
                Notification({
                    title: "Errors",
                    message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                    type: "error"
                })
            });
    }
};


export const fnGetExportByName = (name) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/export/export-manager?type=" + name).then(response => {
            dispatch(setDataExportByName(response.data));
        }).catch(error => {
            console.log(error)
            Notification({
                title: "Errors",
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: "error"
            })
        });
    }
};

export const fnChangeLevelExcel = (typeName, position) => {
    let objLevel = {};
    objLevel.typeName = typeName;
    objLevel.position = position;
    return dispatch => {
        MessageBox.confirm('This will change level . Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
        }).then(() => {
            $http.putData(CONFIG.API_BASE_URL + "/v1/rest/export/excel-custom/level", objLevel).then((response) => {
                Notification({
                    title: 'Success',
                    message: 'Change Level Success',
                    type: 'success'
                });
                dispatch(fnGetExportByName(typeName));
            }).catch((error) => {
                console.log(error)
                Notification({
                    title: "Errors",
                    message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                    type: "error"
                });
            });
        })
    }
};


export const fnUpdateExcelDetail = (typeName, obj) => {
    return dispatch => {
        $http.postData(CONFIG.API_BASE_URL + "/v1/rest/export/excel-custom/" + typeName, obj).then((response) => {
            Notification({
                title: 'Success',
                message: 'Update Excel Success',
                type: 'success'
            });
            console.log(typeName)
            dispatch(fnGetExportByName(typeName));
            dispatch(fnShowDialog(false, ''));
        }).catch((error) => {
            console.log(error)
            Notification({
                title: "Errors",
                message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                type: "error"
            });
        });
    }
};


//EXCEL
export const fnExportExcel = (fileName, typeName) => {
    return dispatch => {
        let exportForm = { fileName: 'REPORT_' + fileName.toUpperCase() };
        $http.postDataWithResponeTypeHaveData(CONFIG.API_BASE_URL + "/v1/rest/export/excel/" + typeName, exportForm, { "Content-type": "application/json" }, "arraybuffer")
            .then(response => {
                Notification({
                    title: 'Success',
                    message: 'Export Excel Success',
                    type: 'success'
                });
                let blob = new Blob([response.data], { responseType: 'blob' });
                FileSaver.saveAs(blob, `${exportForm.fileName}.xlsx`);
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

export const fnShowDialog = (status, id) => {
    return dispatch => {
        dispatch(setShowDialog(status));
        if (id) {
            dispatch(getDataExportUpdate(id));
        }
    }
};

export const fnGetDataUpdate = (id) => {
    return dispatch => {
        dispatch(getDataExportUpdate(id));
    }
};

export const fnSetDataUpdate = (obj) => {
    return dispatch => {
        dispatch(setUpdateExport(obj));
    }
}

