export const PERMISSION_GET_ALL_PERMISSION = 'PERMISSION_GET_ALL_PERMISSION';
export const PERMISSION_OPEN_MODAL_ADD_PERMISSION = 'PERMISSION_OPEN_MODAL_ADD_PERMISSION';
export const PERMISSION_SET_VALUE_INPUT = 'PERMISSION_SET_VALUE_INPUT';

export function getAllPermission(permisison) {
    return {
        type: PERMISSION_GET_ALL_PERMISSION,
        payload: permisison
    }
}

export function setValuePermission(permisison) {
    return {
        type: PERMISSION_SET_VALUE_INPUT,
        payload: permisison
    }
}

export function openModalAddPermission(flag) {
    return {
        type: PERMISSION_OPEN_MODAL_ADD_PERMISSION,
        payload: flag
    }
}