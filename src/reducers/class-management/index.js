import {
    CLASS_GET_ALL_CLASS, CLASS_DELETE_CLASS, CLASS_UPDATE_CLASS, CLASS_SHOW_DIALOG, CLASS_SET_DATA_CLASS, CLASS_CLEAR_ADD_CLASS, CLASS_SET_UPDATE_DATA_CLASS, CLASS_SAVE_UPDATED_DATA_CLASS, CLASS_SHOW_CLASS_REMOVE,
    CLASS_GET_ALL_CLASS_REMOVE, CLASS_UPDATE_CLASS_REMOVE_SUCCESS, CLASS_SET_CURRENT_PAGE, CLASS_SET_TOTAL, CLASS_SET_PAGE_SIZE, CLASS_SET_FILTER, CLASS_KEYWORD_SEARCH, GET_INFO_DETAIL_CLASS
} from "../../actions/class-manager"

const initialState = {
    classData: [],
    infoClassData: {},
    classDataRemove: [],
    formClass: {
        id: "",
        className: "",
        numOfMember: 10,
        description: "",
        active: ""
    },
    formClassAdd: {
        className: "",
        numOfMember: 10,
        description: "",
    },
    formClassUpdate: {
        id: "",
        className: "",
        numOfMember: 10,
        description: "",
        active: ""
    },
    showClassDialog: false,
    showClassDialogType: "",
    showClassRemove: false,
    paging: {
        pageSize: 10,
        total: 1,
        currentPage: 1
    },
    filter: "",
    dataSearch: ""

};

export function classManagerReducer(state = initialState, action) {
    switch (action.type) {
        case CLASS_GET_ALL_CLASS:
            return {
                ...state,
                classData: action.payload
            };

        case CLASS_UPDATE_CLASS:
            let classUpdated = state.classData.map((v) => {
                if (v.id === action.payload.classDataUpdate.id) {
                    v = action.payload.classDataUpdate;
                }
                return v;
            })
            return {
                ...state,
                classData: classUpdated
            };

        case GET_INFO_DETAIL_CLASS:
            return {
                ...state,
                infoClassData: action.payload
            };

        case CLASS_DELETE_CLASS:
            let classDeleted = state.classData.filter((v) => v.id !== action.payload)
            return {
                ...state,
                classData: classDeleted

            };

        case CLASS_SET_DATA_CLASS:
            return {
                ...state,
                formClassAdd: {
                    className: action.payload.key === "className" ? action.payload.value : state.formClassAdd.className,
                    description: action.payload.key === "description" ? action.payload.value : state.formClassAdd.description,
                    numOfMember: action.payload.key === "numOfMember" ? action.payload.value : state.formClassAdd.numOfMember
                },
            };

        case CLASS_SET_UPDATE_DATA_CLASS:
            return {
                ...state,
                formClassUpdate: {
                    id: state.formClassUpdate.id,
                    className: action.payload.key === "className" ? action.payload.value : state.formClassUpdate.className,
                    description: action.payload.key === "description" ? action.payload.value : state.formClassUpdate.description,
                    numOfMember: action.payload.key === "numOfMember" ? action.payload.value : state.formClassUpdate.numOfMember,
                    active: state.formClassUpdate.active
                }
            };

        case CLASS_SAVE_UPDATED_DATA_CLASS:
            let classDataUpdated = state.classData.map((v) => {
                if (v.id === action.payload.id) {
                    v.className = action.payload.className;
                    v.description = action.payload.description;
                    v.numOfMember = action.payload.numOfMember;
                }
                return v;
            })
            return {
                ...state,
                classData: classDataUpdated
            };

        case CLASS_CLEAR_ADD_CLASS:
            return {
                ...state,
                formClassAdd: {
                    className: "",
                    description: "",
                    numOfMember: 10,
                },
            };

        case CLASS_SHOW_DIALOG:
            let user = "";
            if (action.payload.options === "update" && action.payload.id) {
                user = state.classData.filter((v) => v.id === action.payload.id)
            }
            return {
                ...state,
                showClassDialog: action.payload.status,
                showClassDialogType: action.payload.options,
                formClassAdd: {
                    className: "",
                    description: "",
                    numOfMember: 10,
                },
                formClassUpdate: user !== "" ? {
                    id: user[0]["id"],
                    className: user[0]["className"],
                    numOfMember: user[0]["numOfMember"],
                    description: user[0]["description"],
                    active: user[0]["active"]
                } : ""
            };

        case CLASS_GET_ALL_CLASS_REMOVE:
            return {
                ...state,
                classDataRemove: action.payload
            };

        case CLASS_UPDATE_CLASS_REMOVE_SUCCESS:
            let newDataRemove = state.classDataRemove.filter((v) => v.id !== action.payload)
            return {
                ...state,
                classDataRemove: newDataRemove
            };

        case CLASS_SHOW_CLASS_REMOVE:
            return {
                ...state,
                showClassRemove: action.payload
            };

        case CLASS_SET_CURRENT_PAGE:
            return {
                ...state,
                paging: Object.assign({}, state.paging, { "currentPage": action.payload })
            };

        case CLASS_SET_TOTAL:
            return {
                ...state,
                paging: Object.assign({}, state.paging, { "total": action.payload })
            };

        case CLASS_SET_PAGE_SIZE:
            return {
                ...state,
                paging: Object.assign({}, state.paging, { "pageSize": action.payload })
            };

        case CLASS_SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };

        case CLASS_KEYWORD_SEARCH:
            return {
                ...state,
                dataSearch: action.payload
            };

        default: return state;
    }
}

export const getClassManagement = state => state.ClassManagement.classData;
export const getClassDataUpdate = state => state.ClassManagement.formClassUpdate;
export const getClassDataAdd = state => state.ClassManagement.formClassAdd;
export const getInfoClass = state => state.ClassManagement.infoClassData;
export const getClassDataRemove = state => state.ClassManagement.classDataRemove;
export const showClassDialog = state => state.ClassManagement.showClassDialog;
export const showClassDialogType = state => state.ClassManagement.showClassDialogType;
export const showClassRemove = state => state.ClassManagement.showClassRemove;

export const getPaging = state => state.ClassManagement.paging;
export const getFilter = state => state.ClassManagement.filter;
export const getDataSearch = state => state.ClassManagement.dataSearch;

export default classManagerReducer;