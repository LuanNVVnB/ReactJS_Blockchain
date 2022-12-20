import {
    USER_OPEN_EXPORT_USER_DIALOG,
    USER_SET_CURRENT_PAGE, USER_SET_TOTAL,
    USER_SET_PAGE_SIZE, USER_SET_FILTER,
    USER_FILE_USER_BY_USERNAME,
    USER_EXPORT_FILE_USER, USER_DOWNLOAD_TEMPLATE,
    USER_CLOSE_IMPORT_FORM_DIALOG, USER_OPEN_IMPORT_FORM_DIALOG,
    USER_CHANGE_CREATE_DATA, USER_CHANGE_UPDATE_DATA,
    USER_GET_USER_BY_USERNAME, USER_REMOVE_USER_BY_USERNAME,
    USER_CLOSE_UPDATE_USER_DIALOG, USER_OPEN_UPDATE_USER_DIALOG,
    USER_OPEN_CREATE_USER_DIALOG, USER_CLOSE_CREATE_USER_DIALOG,
    USER_CREATE_USER, USER_UPDATE_USER,
    USER_CHANGE_EXPORT_USER_DATA,
    USER_OPEN_DIALOG_USER_TRASH,
    USER_GET_ALL_USER_DELETE,
    USER_RECOVERY_USER_DELETE,
    GET_ALL_METAMASK
} from '../../actions/user-manager'

const initalState = {
    userData: [],
    userDataTrash: [],
    formUser: {
        fullname: "",
        email: "",
        username: "",
        phone: "",
        password: "",
        confirm: ""
    },
    formUserUpdate: {
        fullname: "",
        email: "",
        username: "",
        phone: "",
        password: "",
        confirm: "",
        newPassword: ""
    },
    paging: {
        pageSize: 10,
        total: 1,
        currentPage: 1
    },
    filter: "",
    template: [],
    showCreateUserDialog: false,
    showUploadUserDialog: false,
    showImportFormDialog: false,
    openExportUserDialog: false,
    showDialogTrash: false,
    exportForm: {
        exportData: [],
        exportType: '',
        sheetName: '',
        fileName: ''
    },
    dataExportUser: [],
    userMetamask:[]
};

export function userManagerReducer(state = initalState, action) {
    switch (action.type) {
        case GET_ALL_METAMASK:
            return{
                ...state,
                userMetamask:action.payload
            }
        case USER_SET_CURRENT_PAGE:
            return {
                ...state,
                paging: Object.assign({}, state.paging, { 'currentPage': action.payload })
            };
        case USER_SET_TOTAL:
            return {
                ...state,
                paging: Object.assign({}, state.paging, { 'total': action.payload })
            };
        case USER_SET_PAGE_SIZE:
            return {
                ...state,
                paging: Object.assign({}, state.paging, { 'pageSize': action.payload })
            };
        case USER_SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        case USER_FILE_USER_BY_USERNAME:
            return {
                ...state,
                userData: action.payload
            };
        case USER_REMOVE_USER_BY_USERNAME:
            return state.filter(userData => userData.userName !== action.payload.userName);
        case USER_CLOSE_CREATE_USER_DIALOG:
            return {
                ...state,
                showCreateUserDialog: false
            };
        case USER_OPEN_CREATE_USER_DIALOG:
            return {
                ...state,
                showCreateUserDialog: true,
                formUser: {
                    fullname: "",
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                    confirm: "",
                },
            };
        case USER_CLOSE_UPDATE_USER_DIALOG:
            return {
                ...state,
                showUpdateUserDialog: false
            };
        case USER_OPEN_UPDATE_USER_DIALOG:
            return {
                ...state,
                showUpdateUserDialog: true
            };
        case USER_CLOSE_IMPORT_FORM_DIALOG:
            return {
                ...state,
                showImportFormDialog: false
            };
        case USER_OPEN_IMPORT_FORM_DIALOG:
            return {
                ...state,
                showImportFormDialog: true
            };
        case USER_CREATE_USER:
            return {
                ...state,
                formUser: action.payload,
            };
        case USER_UPDATE_USER:
            return {
                ...state,
                formUserUpdate: {
                    fullname: action.payload.displayName,
                    username: action.payload.userName,
                    email: action.payload.emailAddress,
                    phone: action.payload.phone,
                    password: action.payload.password,
                    confirm: action.payload.confirm,
                    newPassword: action.payload.password,
                },
            };
        case USER_GET_USER_BY_USERNAME:
            return {
                ...state,
                formUserUpdate: {
                    fullname: action.payload.firstName + ' ' + action.payload.lastName,
                    username: action.payload.username,
                    email: action.payload.email,
                    phone: action.payload.phone,
                    password: "",
                    confirm: "",
                    newPassword: "",
                },
            };
        case USER_CHANGE_UPDATE_DATA:
            console.log("Payload Data: ", action.payload);
            return {
                ...state,
                formUserUpdate: Object.assign({}, state.formUserUpdate, { [action.payload.key]: action.payload.value })
            };
        case USER_CHANGE_CREATE_DATA:
            console.log("Payload Data: ", action.payload);
            return {
                ...state,
                formUser: Object.assign({}, state.formUser, { [action.payload.key]: action.payload.value })
            };
        case USER_DOWNLOAD_TEMPLATE:
            return {
                ...state,
                template: action.payload
            };
        // Export Excel
        case USER_EXPORT_FILE_USER:
            return {
                ...state,
                dataExportUser: action.payload
            };
        case USER_OPEN_EXPORT_USER_DIALOG:
            return {
                ...state,
                openExportUserDialog: action.payload,
                exportForm: {
                    exportData: state.userData,
                    exportType: 'xlsx',
                    sheetName: 'ListUser',
                    fileName: 'UserExport'
                },
            };
        case USER_CHANGE_EXPORT_USER_DATA:
            return {
                ...state,
                exportForm: Object.assign({}, state.exportForm, { [action.payload.key]: action.payload.value })
            };

        // Trash
        case USER_OPEN_DIALOG_USER_TRASH:
            return {
                ...state,
                showDialogTrash: action.payload

            };
        case USER_GET_ALL_USER_DELETE:
            return {
                ...state,
                userDataTrash: action.payload
            }
        case USER_RECOVERY_USER_DELETE:
            return {
                ...state,
                userDataTrash: state.userDataTrash.filter((v) => v.id !== action.payload)
            }
        default: return state;
    }
}

export const getPaging = state => state.UserManager.paging;
export const getFilter = state => state.UserManager.filter;
export const getAllUser = state => state.UserManager.userData;
export const removeUserByUserName = state => state.UserManager.userData;
export const createUser = state => state.UserManager.userData;
export const getShowCreateUserDialog = state => state.UserManager.showCreateUserDialog;
export const getShowUpdateUserDialog = state => state.UserManager.showUpdateUserDialog;
export const getShowImportFormDialog = state => state.UserManager.showImportFormDialog;
export const getUserForm = state => state.UserManager.formUser;
export const getUserFormUpdate = state => state.UserManager.formUserUpdate;
export const getTemplate = state => state.UserManager.template;
export const getCurrentPage = state => state.UserManager.currentPage;
// Export excel
export const openExportUserDialog = state => state.UserManager.openExportUserDialog;
export const exportForm = state => state.UserManager.exportForm;
export const getDataExportUser = state => state.UserManager.dataExportUser;

// Trash
export const getDataTrash = state => state.UserManager.userDataTrash;
export const getShowDialogTrash = state => state.UserManager.showDialogTrash;
export default userManagerReducer;