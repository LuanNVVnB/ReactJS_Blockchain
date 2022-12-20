import {
    PERMISSION_GET_ALL_PERMISSION,
    PERMISSION_OPEN_MODAL_ADD_PERMISSION,
    PERMISSION_SET_VALUE_INPUT,
} from "../../actions/permission";

const initialState = {
    permissions: [],
    openModalAddPermission: false,
    permission: {
        code: '',
        name: '',
    }
};

export function permissionReducer(state = initialState, action) {
    switch (action.type) {
        case PERMISSION_GET_ALL_PERMISSION:
            return {
                ...state,
                permissions: action.payload
            };
        case PERMISSION_OPEN_MODAL_ADD_PERMISSION:
            return {
                ...state,
                permission: [],
                openModalAddPermission: action.payload
            };
        case PERMISSION_SET_VALUE_INPUT:
            return {
                ...state,
                permission: Object.assign({}, state.permission, { [action.payload.key]: action.payload.value })
            };
        default: return state;
    }
}

export const permission = state => state.Permission.permission;
export const getAllPermission = state => state.Permission.permissions;
export const openModalAddPermission = state => state.Permission.openModalAddPermission;

export default permissionReducer;