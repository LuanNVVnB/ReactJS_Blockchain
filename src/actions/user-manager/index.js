export const USER_REMOVE_USER_BY_USERNAME = 'USER_REMOVE_USER_BY_USERNAME';
export const USER_CLOSE_CREATE_USER_DIALOG = 'USER_CLOSE_CREATE_USER_DIALOG';
export const USER_OPEN_CREATE_USER_DIALOG = 'USER_OPEN_CREATE_USER_DIALOG';
export const USER_CLOSE_UPDATE_USER_DIALOG = 'USER_CLOSE_UPDATE_USER_DIALOG';
export const USER_OPEN_IMPORT_FORM_DIALOG = 'USER_OPEN_IMPORT_FORM_DIALOG';
export const USER_CLOSE_IMPORT_FORM_DIALOG = 'USER_CLOSE_IMPORT_FORM_DIALOG';
export const USER_OPEN_UPDATE_USER_DIALOG = 'USER_OPEN_UPDATE_USER_DIALOG';
export const USER_CREATE_USER = 'USER_CREATE_USER';
export const USER_UPDATE_USER = 'USER_UPDATE_USER';
export const USER_GET_USER_BY_USERNAME = 'USER_GET_USER_BY_USERNAME';
export const USER_CHANGE_UPDATE_DATA = 'USER_CHANGE_UPDATE_DATA';
export const USER_CHANGE_CREATE_DATA = 'USER_CHANGE_CREATE_DATA';
export const USER_DOWNLOAD_TEMPLATE = 'USER_DOWNLOAD_TEMPLATE';
export const USER_FILE_USER_BY_USERNAME = 'USER_FILE_USER_BY_USERNAME';
export const USER_SET_FILTER = 'USER_SET_FILTER';
export const USER_SET_PAGE_SIZE = 'USER_SET_PAGE_SIZE';
export const USER_SET_TOTAL = 'USER_SET_TOTAL';
export const USER_SET_CURRENT_PAGE = 'USER_SET_CURRENT_PAGE';

export const USER_OPEN_EXPORT_USER_DIALOG = 'USER_OPEN_EXPORT_USER_DIALOG';
export const USER_CHANGE_EXPORT_USER_DATA = 'USER_CHANGE_EXPORT_USER_DATA';
export const USER_EXPORT_FILE_USER = 'USER_EXPORT_FILE_USER';

export const USER_OPEN_DIALOG_USER_TRASH = 'USER_OPEN_DIALOG_USER_TRASH';
export const USER_GET_ALL_USER_DELETE = 'USER_GET_ALL_USER_DELETE';
export const USER_RECOVERY_USER_DELETE = 'USER_RECOVERY_USER_DELETE';
export const GET_ALL_METAMASK = 'GET_ALL_METAMASK';

export function getAllUserMataMask(data){
    return {
        type:GET_ALL_METAMASK,
        payload:data
    }
}

export function changeExportUserData(data) {
    return {
        type: USER_CHANGE_EXPORT_USER_DATA,
        payload: data
    }
}
export function openExportUserDialog(flag) {
    return {
        type: USER_OPEN_EXPORT_USER_DIALOG,
        payload: flag
    }
}

export function setCurrentPage(page) {
    return {
        type: USER_SET_CURRENT_PAGE,
        payload: page
    }
}

export function setTotal(total) {
    return {
        type: USER_SET_TOTAL,
        payload: total
    }
}

export function setPageSize(size) {
    return {
        type: USER_SET_PAGE_SIZE,
        payload: size
    }
}

export function setFilter(filter) {
    return {
        type: USER_SET_FILTER,
        payload: filter
    }
}

export function filterUserByUsername(users) {
    return {
        type: USER_FILE_USER_BY_USERNAME,
        payload: users
    }
}

export function exportFileUser(template) {
    return {
        type: USER_EXPORT_FILE_USER,
        payload: template
    }
}
export function downloadTemplate(template) {
    return {
        type: USER_DOWNLOAD_TEMPLATE,
        payload: template
    }
}
export function changeCreateData(createData) {
    return {
        type: USER_CHANGE_CREATE_DATA,
        payload: createData
    }
}
export function changeUpdateData(updateData) {
    return {
        type: USER_CHANGE_UPDATE_DATA,
        payload: updateData
    }
}
export function updateUser(formUserUpdate) {
    return {
        type: USER_UPDATE_USER,
        payload: formUserUpdate,
    }
}
export function getUserByUsername(getRowData) {
    return {
        type: USER_GET_USER_BY_USERNAME,
        payload: getRowData,
    }
}
export function createUser(formUser) {
    return {
        type: USER_CREATE_USER,
        payload: formUser
    }
}

export function removeUserByUserName(userName) {
    return {
        type: USER_REMOVE_USER_BY_USERNAME,
        payload: userName
    }
}

export function closeCreateUserDialog(flag) {
    return {
        type: USER_CLOSE_CREATE_USER_DIALOG,
        payload: flag
    }
}

export function openCreateUserDialog(flag) {
    return {
        type: USER_OPEN_CREATE_USER_DIALOG,
        payload: flag
    }
}
export function closeUpdateUserDialog(flag) {
    return {
        type: USER_CLOSE_UPDATE_USER_DIALOG,
        payload: flag
    }
}

export function openUpdateUserDialog(flag) {
    return {
        type: USER_OPEN_UPDATE_USER_DIALOG,
        payload: flag
    }
}

export function closeImportFormDialog(flag) {
    return {
        type: USER_CLOSE_IMPORT_FORM_DIALOG,
        payload: flag
    }
}

export function openImportFormDialog(flag) {
    return {
        type: USER_OPEN_IMPORT_FORM_DIALOG,
        payload: flag
    }
}

export function showDialogUserTrash(status) {
    return {
        type: USER_OPEN_DIALOG_USER_TRASH,
        payload: status
    }
}

export function getUserTrash(userDataDeleted) {
    return {
        type: USER_GET_ALL_USER_DELETE,
        payload: userDataDeleted
    }
}

export function removeUserTrash(usrId) {
    return {
        type: USER_RECOVERY_USER_DELETE,
        payload: usrId
    }
}