export const CLASS_GET_ALL_CLASS = 'GET_ALL_CLASS';
export const CLASS_DELETE_CLASS = 'DELETE_CLASS';
export const CLASS_UPDATE_CLASS = 'UPDATE_CLASS';
export const CLASS_SHOW_DIALOG = 'SHOW_CLASS_DIALOG';
export const CLASS_SET_DATA_CLASS = 'ADD_SET_CLASS';
export const CLASS_ADD_CLASS = 'ADD_CLASS';
export const CLASS_CLEAR_ADD_CLASS = 'CLEAR_ADD_CLASS';
export const CLASS_SET_UPDATE_DATA_CLASS = 'CLASS_SET_UPDATE_DATA_CLASS';
export const CLASS_SAVE_UPDATED_DATA_CLASS = 'CLASS_SAVE_UPDATED_DATA_CLASS';
export const CLASS_GET_ALL_CLASS_REMOVE = 'CLASS_GET_ALL_CLASS_REMOVE';
export const CLASS_SHOW_CLASS_REMOVE = 'CLASS_SHOW_CLASS_REMOVE';
export const CLASS_UPDATE_CLASS_REMOVE_SUCCESS = 'CLASS_UPDATE_CLASS_REMOVE_SUCCESS';
export const CLASS_SET_CURRENT_PAGE = 'CLASS_SET_CURRENT_PAGE';
export const CLASS_SET_TOTAL = 'CLASS_SET_TOTAL';
export const CLASS_SET_PAGE_SIZE = 'CLASS_SET_PAGE_SIZE';
export const CLASS_SET_FILTER = 'CLASS_SET_FILTER';
export const CLASS_KEYWORD_SEARCH = 'CLASS_KEYWORD_SEARCH';
export const GET_INFO_DETAIL_CLASS = 'GET_INFO_DETAIL_CLASS';


export function getAllClass(classData) {
    return {
        type: CLASS_GET_ALL_CLASS,
        payload: classData
    }
}

export const getInfoClass = (dataInfo) => {
    return {
        type: GET_INFO_DETAIL_CLASS,
        payload: dataInfo
    }
}

export function getAllClassRemove(classDataRemove) {
    return {
        type: CLASS_GET_ALL_CLASS_REMOVE,
        payload: classDataRemove
    }
}

export function deleteClass(id) {
    return {
        type: CLASS_DELETE_CLASS,
        payload: id
    }
}

export function updateClass(classDataUpdate) {
    return {
        type: CLASS_UPDATE_CLASS,
        payload: classDataUpdate
    }
}

export function setClassData(classData) {
    return {
        type: CLASS_SET_DATA_CLASS,
        payload: classData
    }
}
export function setClassUpdateData(classData) {
    return {
        type: CLASS_SET_UPDATE_DATA_CLASS,
        payload: classData
    }
}

export function setUpdatedClassUpdateData(classData) {
    return {
        type: CLASS_SAVE_UPDATED_DATA_CLASS,
        payload: classData
    }
}

export function closeCreateClassDialog(status, options, id) {
    return {
        type: CLASS_SHOW_DIALOG,
        payload: { status, options, id }
    }
}

export function clearClassDataAdd() {
    return {
        type: CLASS_CLEAR_ADD_CLASS
    }
}

export function showClassRemove(status) {
    return {
        type: CLASS_SHOW_CLASS_REMOVE,
        payload: status
    }
}

export function updateClassRemoveSuccess(idClassRemove) {
    return {
        type: CLASS_UPDATE_CLASS_REMOVE_SUCCESS,
        payload: idClassRemove
    }
}

export function setCurrentPage(page) {
    return {
        type: CLASS_SET_CURRENT_PAGE,
        payload: page
    }
}

export function setTotal(total) {
    return {
        type: CLASS_SET_TOTAL,
        payload: total
    }
}

export function setPageSize(size) {
    return {
        type: CLASS_SET_PAGE_SIZE,
        payload: size
    }
}

export function setFilter(filter) {
    return {
        type: CLASS_SET_FILTER,
        payload: filter
    }
}


export function setDataSearch(keyword) {
    return {
        type: CLASS_KEYWORD_SEARCH,
        payload: keyword
    }
}