export const FILE_DELETE_FILE = 'FILE_DELETE_FILE';
export const FILE_GET_FILE_BY_ID = 'FILE_GET_FILE_BY_ID';
export const FILE_SET_FILTER = 'FILE_SET_FILTER';
export const FILE_SET_PAGE_SIZE = 'FILE_SET_PAGE_SIZE';
export const FILE_SET_TOTAL = 'FILE_SET_TOTAL';
export const FILE_SET_CURRENT_PAGE = 'FILE_SET_CURRENT_PAGE';
export const FILE_FILTER_BY_FILE_NAME = 'FILE_FILTER_BY_FILE_NAME';
export function setCurrentPage(page) {
    return {
        type: FILE_SET_CURRENT_PAGE,
        payload: page
    }
}

export function setTotal(total) {
    return {
        type: FILE_SET_TOTAL,
        payload: total
    }
}

export function setPageSize(size) {
    return {
        type: FILE_SET_PAGE_SIZE,
        payload: size
    }
}

export function setFilter(filter) {
    return {
        type: FILE_SET_FILTER,
        payload: filter
    }
}

export function getFileById(id) {
    return {
        type: FILE_GET_FILE_BY_ID,
        payload: id
    }
}

export function deleteFile(id) {
    return {
        type: FILE_DELETE_FILE,
        payload: id
    }
}

export function filterFileByFileName(listFileInfo) {
    return {
        type: FILE_FILTER_BY_FILE_NAME,
        payload: listFileInfo
    }
}
