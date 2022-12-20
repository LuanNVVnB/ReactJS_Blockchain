export const OBJECT_TYPE_GET_ALL_OBJECT_TYPE = 'OBJECT_TYPE_GET_ALL_OBJECT_TYPE';
export const OBJECT_TYPE_OPEN_MODAL_ADD_OBJECT_TYPE = 'OBJECT_TYPE_OPEN_MODAL_ADD_OBJECT_TYPE';
export const OBJECT_TYPE_SET_VALUE_INPUT = 'OBJECT_TYPE_SET_VALUE_INPUT';
export const OBJECT_TYPE_GET_OBJECT_TYPE_BY_CODE = 'OBJECT_TYPE_GET_OBJECT_TYPE_BY_CODE';
export const OBJECT_TYPE_OPEN_MODAL_UPDATE_OBJECT_TYPE = 'OBJECT_TYPE_OPEN_MODAL_UPDATE_OBJECT_TYPE';
export const OBJECT_TYPE_SET_VALUE_UPDATE = 'OBJECT_TYPE_SET_VALUE_UPDATE';

export const GET_PERMISSTIONS_BY_CODE = 'GET_PERMISSTIONS_BY_CODE';
export const OPEN_MODAL_UPDATE_PERMISSIONS = 'OPEN_MODAL_UPDATE_PERMISSIONS';
export const PERMISSION_SET_VALUE_INPUT = 'PERMISSION_SET_VALUE_INPUT';
export const GET_ALL_PERMISSTIONS = 'GET_ALL_PERMISSTIONS';

export function getAllPermission(permisisons) {
    return {
        type: GET_ALL_PERMISSTIONS,
        payload: permisisons
    }
}
export function loadEditPermissionUpdate(row) {
    return {
        type: GET_PERMISSTIONS_BY_CODE,
        payload: row
    }
}
export function setValuePermission(permisison) {
    return {
        type: PERMISSION_SET_VALUE_INPUT,
        payload: permisison
    }
}
export function openModalUpdatePermissions(flag) {
    return {
        type: OPEN_MODAL_UPDATE_PERMISSIONS,
        payload: flag
    }
}
export function getObjectTypesById(code) {
    return {
        type: OBJECT_TYPE_GET_OBJECT_TYPE_BY_CODE,
        payload: code
    }
}

export function getAllObjectType(objectType) {
    return {
        type: OBJECT_TYPE_GET_ALL_OBJECT_TYPE,
        payload: objectType
    }
}

export function setValueObjectType(objectType) {
    return {
        type: OBJECT_TYPE_SET_VALUE_INPUT,
        payload: objectType
    }
}
export function setValueUpdateObjectType(objectType) {
    return {
        type: OBJECT_TYPE_SET_VALUE_UPDATE,
        payload: objectType
    }
}
export function openModalAddObjectType(flag) {
    return {
        type: OBJECT_TYPE_OPEN_MODAL_ADD_OBJECT_TYPE,
        payload: flag
    }
}
export function openModalUpdateObjectType(flag) {
    return {
        type: OBJECT_TYPE_OPEN_MODAL_UPDATE_OBJECT_TYPE,
        payload: flag
    }
}