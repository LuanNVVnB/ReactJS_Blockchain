export const GROUP_GET_ALL_GROUP = 'GROUP_GET_ALL_GROUP';
export const GROUP_CLOSE_CREATE_GROUP_DIALOG = 'GROUP_CLOSE_CREATE_GROUP_DIALOG';
export const GROUP_OPEN_CREATE_GROUP_DIALOG = 'GROUP_OPEN_CREATE_GROUP_DIALOG';
export const GROUP_CHANGE_CREATE_DATA = 'GROUP_CHANGE_CREATE_DATA';
export const GROUP_CREATE_GROUP = 'GROUP_CREATE_GROUP';
export const GROUP_REMOVE_GROUP_BY_GROUPNAME = 'GROUP_REMOVE_GROUP_BY_GROUPNAME';
export const GROUP_UPDATE_GROUP = 'GROUP_UPDATE_GROUP';
export const GROUP_CHANGE_UPDATE_DATA = 'GROUP_CHANGE_UPDATE_DATA';
export const GROUP_CLOSE_UPDATE_GROUP_DIALOG = 'GROUP_CLOSE_UPDATE_GROUP_DIALOG';
export const GROUP_OPEN_UPDATE_GROUP_DIALOG = 'GROUP_OPEN_UPDATE_GROUP_DIALOG';
export const GROUP_GET_GROUP_BY_GROUPNAME = 'GROUP_GET_GROUP_BY_GROUPNAME';
export const GROUP_SET_FILTER = 'GROUP_SET_FILTER';
//Edit user in group
export const ADD_USER_TO_GROUP = 'ADD_USER_TO_GROUP';
export const REMOVE_USER_IN_GROUP = 'REMOVE_USER_IN_GROUP';
export const INIT_DATA_USER = 'INIT_DATA_USER';
export const LOAD_GROUP_USER = 'LOAD_GROUP_USER';
export const EDIT_GROUP_USER = 'EDIT_GROUP_USER';
export const OPEN_USER_GROUP_DIALOG = 'OPEN_USER_GROUP_DIALOG';
export const CLOSE_USER_GROUP_DIALOG = 'CLOSE_USER_GROUP_DIALOG';
export const CHANGE_USER_MEMBER = 'CHANGE_USER_MEMBER';
export const GET_SELECT_GROUP = 'GET_SELECT_GROUP';

//Edit user in group
export function setFilter(filter) {
    return {
        type: GROUP_SET_FILTER,
        payload: filter
    }
}
export function getSelectGroup(selectGroupName) {
    return {
        type: GET_SELECT_GROUP,
        payload: selectGroupName
    }
}
export function changeUserMember(userName) {
    return {
        type: CHANGE_USER_MEMBER,
        payload: userName
    }
}
export function addUserToGroup(userData){
    return {
        type: ADD_USER_TO_GROUP,
        payload: userData,
     }
}
export function removeUserInGroup(userData){
    return {
        type: REMOVE_USER_IN_GROUP,
        payload: userData,
     }
}

export function loadGroupUser(userData){
    return {
        type: LOAD_GROUP_USER,
        payload: userData,
     }
}

export function editGroupUser(userData){
    return {
        type: EDIT_GROUP_USER,
        payload: userData,
     }
}
export function initDataUser(userData){
    return {
        type: INIT_DATA_USER,
        payload: userData,
     }
}
export function closeUserGroupDialog(flag) {
    return {
        type: CLOSE_USER_GROUP_DIALOG,
        payload: flag
    }
}

export function openUserGroupDialog(flag) {
    return {
        type: OPEN_USER_GROUP_DIALOG,
        payload: flag
    }
}
//User Manager
export function getGroupByGroupname(getRowData){
    return {
        type: GROUP_GET_GROUP_BY_GROUPNAME,
        payload: getRowData,
     }
}
export function changeUpdateData(updateData) {
    return {
        type: GROUP_CHANGE_UPDATE_DATA,
        payload: updateData
    }
}
export function updateGroup(formGroupUpdate){
    return {
        type: GROUP_UPDATE_GROUP,
        payload: formGroupUpdate,
     }
}
export function closeUpdateGroupDialog(flag) {
    return {
        type: GROUP_CLOSE_UPDATE_GROUP_DIALOG,
        payload: flag
    }
}

export function openUpdateGroupDialog(flag) {
    return {
        type: GROUP_OPEN_UPDATE_GROUP_DIALOG,
        payload: flag
    }
}
export function getAllGroup(groupData){
    return {
        type: GROUP_GET_ALL_GROUP,
        payload: groupData
    }
}
export function createGroup(formGroup){
    return {
        type: GROUP_CREATE_GROUP,
        payload: formGroup
     }
}
export function removeGroupByGroupName(groupName){
    return {
        type: GROUP_REMOVE_GROUP_BY_GROUPNAME,
        payload: groupName
    }
}
export function closeCreateGroupDialog(flag) {
    return {
        type: GROUP_CLOSE_CREATE_GROUP_DIALOG,
        payload: flag
    }
}

export function openCreateGroupDialog(flag) {
    return {
        type: GROUP_OPEN_CREATE_GROUP_DIALOG,
        payload: flag
    }
}
export function changeCreateData(createData) {
    return {
        type: GROUP_CHANGE_CREATE_DATA,
        payload: createData
    }
}