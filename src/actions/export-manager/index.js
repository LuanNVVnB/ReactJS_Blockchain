export const GET_ALL_EXPORT_MANAGER = 'GET_ALL_EXPORT_MANAGER';


export const SET_SHOW_DIALOG_EXPORT_MANAGER = 'SET_SHOW_DIALOG_EXPORT_MANAGER';
export const SET_DATA_UPDATE_EXPORT_MANAGER = 'SET_DATA_UPDATE_EXPORT_MANAGER';
export const GET_BY_NAME_EXPORT_MANAGER = 'GET_BY_NAME_EXPORT_MANAGER';
export const GET_DATA_UPDATE_EXPORT_MANAGER = 'GET_DATA_UPDATE_EXPORT_MANAGER';

export function setDataExport(data) {
    return {
        type: GET_ALL_EXPORT_MANAGER,
        payload: data
    }
};

export function setDataExportByName(data) {
    return {
        type: GET_BY_NAME_EXPORT_MANAGER,
        payload: data
    }
};

export function setShowDialog(status) {
    return {
        type: SET_SHOW_DIALOG_EXPORT_MANAGER,
        payload: status
    }
};

export function getDataExportUpdate(id) {
    return {
        type: GET_DATA_UPDATE_EXPORT_MANAGER,
        payload: id
    }
};

export function setUpdateExport(obj) {
    return {
        type: SET_DATA_UPDATE_EXPORT_MANAGER,
        payload: obj
    }
};