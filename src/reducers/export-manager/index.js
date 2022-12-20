import {
    GET_ALL_EXPORT_MANAGER, GET_BY_NAME_EXPORT_MANAGER, SET_SHOW_DIALOG_EXPORT_MANAGER, GET_DATA_UPDATE_EXPORT_MANAGER, SET_DATA_UPDATE_EXPORT_MANAGER
} from "../../actions/export-manager"

const initialState = {
    exportData: [],
    exportDataByName: [],

    exportDataUpdate: {},
    exportFormUpdate: {
        id: "",
        header: "",
        width: 10
    },
    dialogExport: false

};

export function exportManagerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_EXPORT_MANAGER:
            return {
                ...state,
                exportData: action.payload
            };

        case GET_BY_NAME_EXPORT_MANAGER:
            return {
                ...state,
                exportDataByName: action.payload
            };

        case SET_SHOW_DIALOG_EXPORT_MANAGER:
            return {
                ...state,
                dialogExport: action.payload
            };

        case GET_DATA_UPDATE_EXPORT_MANAGER:
            let data = state.exportDataByName.filter((v) => v.id === action.payload)[0];
            return {
                ...state,
                exportFormUpdate: data
            };
        case SET_DATA_UPDATE_EXPORT_MANAGER:
            console.log(action.payload)
            return {
                ...state,
                exportFormUpdate: {
                    id: state.exportFormUpdate.id,
                    header: action.payload.key === 'header' ? action.payload.value : state.exportFormUpdate.header,
                    width: action.payload.key === 'width' ? action.payload.value : state.exportFormUpdate.width,
                }
            }
        default: return state;
    }
}

export const getExportManager = state => state.ExportManager.exportData;
export const getExportByName = state => state.ExportManager.exportDataByName;
export const getDialogExport = state => state.ExportManager.dialogExport;
export const getDataExportUpdate = state => state.ExportManager.exportDataUpdate;
export const getFormUpdate = state => state.ExportManager.exportFormUpdate;





export default exportManagerReducer;