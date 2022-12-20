import {
    ROLE_CREATE_ROLE, ROLE_DELETE_ROLE, ROLE_EDIT_ROLE_MEMBER, ROLE_GET_ALL_ROLE, ROLE_GET_LIST_USER, ROLE_GET_LIST_GROUP,
    ROLE_CLOSE_EDIT_ROLE_MEMBER, ROLE_CLOSE_CREATE_ROLE,
    ROLE_OPEN_CREATE_ROLE, ROLE_LOAD_EDIT_ROLE_MEMBER,
    ROLE_CHANGE_USER_MEMBER, ROLE_CHANGE_GROUP_MEMBER,
    ROLE_CHANGE_CREATE_DATA, ROLE_GET_USER,
    OPEN_MODAL_UPDATE_PERMISSIONS,
    LOAD_EDIT_PERMISSION_UPDATE,
    PERMISSION_SET_VALUE_INPUT,
    GET_ALL_PERMISSTIONS,
} from "../../actions/role";

const initialState = {
    roleData: [],
    listUser: { data: [] },
    listGroup: { data: [] },
    showCreateRoleStatus: false,
    showEditMemberStatus: false,
    editRoleMemberData: {
        code: "",
        users: [],
        groups: []
    },
    createRoleData: {
        name: "",
        code: ""
    },
    loginUser: {},
    openModalUpdatePermissions: false,
    listPermission: [],
    roleEditPermistionData: {
        code: "",
        permissionId: [],
        values: []
    },

};

export function roleReducer(state = initialState, action) {
    switch (action.type) {
        case ROLE_CREATE_ROLE:
            return {
                ...state,
                createRoleData: [],
                showCreateStatus: true
            };
        case ROLE_DELETE_ROLE:
            return {
                ...state,
                historyDetail: action.payload,
            };
        case ROLE_EDIT_ROLE_MEMBER:
            return {
                ...state,
                editRoleMemberData: action.payload,
            };
        case ROLE_GET_ALL_ROLE:
            return {
                ...state,
                roleData: action.payload
            };
        case ROLE_GET_LIST_USER:
            return {
                ...state,
                listUser: action.payload
            };
        case ROLE_GET_LIST_GROUP:
            return {
                ...state,
                listGroup: action.payload
            };
        case ROLE_CLOSE_EDIT_ROLE_MEMBER:
            return {
                ...state,
                showEditMemberStatus: false,
                editRoleMemberData: {
                    users: [],
                    groups: []
                }
            };
        case ROLE_CLOSE_CREATE_ROLE:
            return {
                ...state,
                showCreateRoleStatus: false,
                createRoleData: {
                    name: "",
                    code: ""
                }
            };
        case ROLE_OPEN_CREATE_ROLE:
            return {
                ...state,
                showCreateRoleStatus: true
            };
        case ROLE_LOAD_EDIT_ROLE_MEMBER:
            return {
                ...state,
                editRoleMemberData: action.payload,
                showEditMemberStatus: true
            };
        case ROLE_CHANGE_USER_MEMBER:
            return {
                ...state,
                editRoleMemberData: Object.assign({}, state.editRoleMemberData, { users: action.payload })
            };
        case ROLE_CHANGE_GROUP_MEMBER:
            return {
                ...state,
                editRoleMemberData: Object.assign({}, state.editRoleMemberData, { groups: action.payload })
            };
        case ROLE_CHANGE_CREATE_DATA:
            return {
                ...state,
                createRoleData: Object.assign({}, state.createRoleData, { [action.payload.key]: action.payload.value })
            };
        case ROLE_GET_USER:
            return {
                ...state,
                loginUser: action.payload,
            };
        case PERMISSION_SET_VALUE_INPUT:
            return {
                ...state,
                roleEditPermistionData: Object.assign({}, state.roleEditPermistionData, {
                    [action.payload.key]: action.payload.value
                })
            };
        case GET_ALL_PERMISSTIONS:
            return {
                ...state,
                listPermission: action.payload
            };
        case LOAD_EDIT_PERMISSION_UPDATE:
            return {
                ...state,
                roleEditPermistionData: action.payload
            };
        case OPEN_MODAL_UPDATE_PERMISSIONS:
            return {
                ...state,
                openModalUpdatePermissions: action.payload
            };
        default: return state;
    }
}

export const getAllRole = state => state.Role.roleData;
export const getListUser = state => state.Role.listUser;
export const getListGroup = state => state.Role.listGroup;
export const getEditRoleMemberData = state => state.Role.editRoleMemberData;
export const getCreateRoleData = state => state.Role.createRoleData;
export const getShowEditMemberStatus = state => state.Role.showEditMemberStatus;
export const getShowCreateRoleStatus = state => state.Role.showCreateRoleStatus;
export const getLoginUser = state => state.Role.loginUser;

export const openModalUpdatePermissions = state => state.Role.openModalUpdatePermissions;
export const listPermission = state => state.Role.listPermission;
export const roleEditPermistionData = state => state.Role.roleEditPermistionData;
export default roleReducer;