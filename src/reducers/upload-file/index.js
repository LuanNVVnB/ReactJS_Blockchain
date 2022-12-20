import { FILE_DELETE_FILE, FILE_GET_FILE_BY_ID, FILE_SET_FILTER, FILE_SET_PAGE_SIZE, FILE_SET_TOTAL, FILE_SET_CURRENT_PAGE, FILE_FILTER_BY_FILE_NAME } from '../../actions/upload-file'

const initalState = {
    fileInfo: [],
    paging: {
        pageSize: 10,
        total: 1,
        currentPage: 1
    },
    filter: "",
    currentPage: ""
};

export function fileManagerReducer(state = initalState, action) {
    switch (action.type) {
        case FILE_SET_CURRENT_PAGE:
            return {
                ...state,
                paging: Object.assign({}, state.paging, { 'currentPage': action.payload })
            };
        case FILE_SET_TOTAL:
            return {
                ...state,
                paging: Object.assign({}, state.paging, { 'total': action.payload })
            };
        case FILE_SET_PAGE_SIZE:
            return {
                ...state,
                paging: Object.assign({}, state.paging, { 'pageSize': action.payload })
            };
        case FILE_SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        case FILE_FILTER_BY_FILE_NAME:
            return {
                ...state,
                fileInfo: action.payload.data.docs === undefined ? action.payload.data : action.payload.data.docs
            };
        case FILE_DELETE_FILE:
            return state.filter(fileInfo => fileInfo.id !== action.payload.id);
        case FILE_GET_FILE_BY_ID:
            return {
                ...state,
                fileInfo: action.payload
            };
        default: return state;
    }
}

export const getPaging = state => state.FileManager.paging;
export const getFilter = state => state.FileManager.filter;
export const getAllFile = state => state.FileManager.fileInfo;
export const removeFileById = state => state.FileManager.fileInfo;
export const getCurrentPage = state => state.FileManager.currentPage;

export default fileManagerReducer;