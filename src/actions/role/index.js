export const ROLE_GET_ALL_ROLE = 'ROLE_GET_ALL_ROLE';
export const ROLE_EDIT_ROLE_MEMBER = 'ROLE_EDIT_ROLE_MEMBER';
export const ROLE_DELETE_ROLE = 'ROLE_DELETE_ROLE';
export const ROLE_CREATE_ROLE = 'ROLE_CREATE_ROLE';
export const ROLE_GET_LIST_USER = 'ROLE_GET_LIST_USER';
export const ROLE_GET_LIST_GROUP = 'ROLE_GET_LIST_GROUP';
export const ROLE_CLOSE_EDIT_ROLE_MEMBER = 'ROLE_CLOSE_EDIT_ROLE_MEMBER';
export const ROLE_CLOSE_CREATE_ROLE = 'ROLE_CLOSE_CREATE_ROLE';
export const ROLE_OPEN_CREATE_ROLE = 'ROLE_OPEN_CREATE_ROLE';
export const ROLE_LOAD_EDIT_ROLE_MEMBER = 'ROLE_LOAD_EDIT_ROLE_MEMBER';
export const ROLE_CHANGE_USER_MEMBER = 'ROLE_CHANGE_USER_MEMBER';
export const ROLE_CHANGE_GROUP_MEMBER = 'ROLE_CHANGE_GROUP_MEMBER';
export const ROLE_CHANGE_ROLE_NAME = 'ROLE_CHANGE_ROLE_NAME';
export const ROLE_CHANGE_DESCRIPTION = 'ROLE_CHANGE_DESCRIPTION';
export const ROLE_CHANGE_CREATE_DATA = 'ROLE_CHANGE_CREATE_DATA';
export const ROLE_GET_USER = 'ROLE_GET_USER';

export const GET_ALL_PERMISSTIONS = 'GET_ALL_PERMISSTIONS';
export const OPEN_MODAL_UPDATE_PERMISSIONS = 'OPEN_MODAL_UPDATE_PERMISSIONS';
export const PERMISSION_SET_VALUE_INPUT = 'PERMISSION_SET_VALUE_INPUT';
export const LOAD_EDIT_PERMISSION_UPDATE = 'LOAD_EDIT_PERMISSION_UPDATE';

export function getAllPermission(permisisons) {
    return {
        type: GET_ALL_PERMISSTIONS,
        payload: permisisons
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
export function loadEditPermissionUpdate(row) {
    return {
        type: LOAD_EDIT_PERMISSION_UPDATE,
        payload: row
    }
}
export function getAllRole(role) {
    return {
        type: ROLE_GET_ALL_ROLE,
        payload: role
    }
}

export function editRoleMember(role) {
    return {
        type: ROLE_EDIT_ROLE_MEMBER,
        payload: role
    }
}

export function loadEditRoleMember(role) {
    return {
        type: ROLE_LOAD_EDIT_ROLE_MEMBER,
        payload: role
    }
}

export function deleteRole(role) {
    return {
        type: ROLE_DELETE_ROLE,
        payload: role
    }
}

export function createRole(role) {
    return {
        type: ROLE_CREATE_ROLE,
        payload: role
    }
}

export function getListUser(role) {
    return {
        type: ROLE_GET_LIST_USER,
        payload: role
    }
}
export function getListGroup(role) {
    return {
        type: ROLE_GET_LIST_GROUP,
        payload: role
    }
}

export function closeRoleEditMember(flag) {
    return {
        type: ROLE_CLOSE_EDIT_ROLE_MEMBER,
        payload: flag
    }
}

export function closeCreateRole(flag) {
    return {
        type: ROLE_CLOSE_CREATE_ROLE,
        payload: flag
    }
}

export function openCreateRole(flag) {
    return {
        type: ROLE_OPEN_CREATE_ROLE,
        payload: flag
    }
}

export function changeUserMember(users) {
    return {
        type: ROLE_CHANGE_USER_MEMBER,
        payload: users
    }
}

export function changeGroupMember(groups) {
    return {
        type: ROLE_CHANGE_GROUP_MEMBER,
        payload: groups
    }
}

export function changeCreateData(createData) {
    return {
        type: ROLE_CHANGE_CREATE_DATA,
        payload: createData
    }
}

export function getUser(user) {
    return {
        type: ROLE_GET_USER,
        payload: user
    }
}