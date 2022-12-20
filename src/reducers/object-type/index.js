import {
    OBJECT_TYPE_GET_ALL_OBJECT_TYPE,
    OBJECT_TYPE_OPEN_MODAL_ADD_OBJECT_TYPE,
    OBJECT_TYPE_SET_VALUE_INPUT,
    OBJECT_TYPE_OPEN_MODAL_UPDATE_OBJECT_TYPE,
    OBJECT_TYPE_GET_OBJECT_TYPE_BY_CODE,
    OBJECT_TYPE_SET_VALUE_UPDATE,
    OPEN_MODAL_UPDATE_PERMISSIONS,
    GET_PERMISSTIONS_BY_CODE,
    PERMISSION_SET_VALUE_INPUT,
    GET_ALL_PERMISSTIONS
} from "../../actions/object-type";

const initialState = {
    objectTypes: [],
    openModalAddObjectType: false,
    openModalUpdateObjectType: false,
    openModalUpdatePermissions: false,
    objectType: {
        code: '',
        name: '',
    },
    objectTypeUpdate: {
        code: '',
        name: '',
    },
    roles: [],
    listPermission: [],
    editPermistionData: {
        objCode : '',
        perCode : []
    }
};

export function objectTypeReducer(state = initialState, action) {
    switch (action.type) {
        case OBJECT_TYPE_GET_ALL_OBJECT_TYPE:
            console.log ("opjecttype====",action.payload)
            return {
                ...state,
                objectTypes: action.payload
            };
        case OBJECT_TYPE_OPEN_MODAL_UPDATE_OBJECT_TYPE:
            return {
                ...state,
                openModalUpdateObjectType: action.payload
            };
        case OBJECT_TYPE_OPEN_MODAL_ADD_OBJECT_TYPE:
            return {
                ...state,
                objectType: [],
                openModalAddObjectType: action.payload
            };
        case OPEN_MODAL_UPDATE_PERMISSIONS:
            return {
                ...state,
                openModalUpdatePermissions: action.payload
            };
        case OBJECT_TYPE_GET_OBJECT_TYPE_BY_CODE:
            return {
                ...state,
                objectTypeUpdate: action.payload
            };
        case GET_PERMISSTIONS_BY_CODE:
            return {
                ...state,
                editPermistionData: action.payload
            };
        case OBJECT_TYPE_SET_VALUE_INPUT:
            return {
                ...state,
                objectType: Object.assign({}, state.objectType, { [action.payload.key]: action.payload.value })
            };
        case OBJECT_TYPE_SET_VALUE_UPDATE:
            return {
                ...state,
                objectTypeUpdate: Object.assign({}, state.objectTypeUpdate, { [action.payload.key]: action.payload.value })
            };
        case PERMISSION_SET_VALUE_INPUT:
            return {
                ...state,
                editPermistionData: Object.assign({}, state.editPermistionData, {
                    [action.payload.key]: action.payload.value
                })
            };
        case GET_ALL_PERMISSTIONS:
            return {
                ...state,
                listPermission: action.payload
            }
        default: return state;
    }
}

export const objectType = state => state.ObjectType.objectType;
export const objectTypeUpdate = state => state.ObjectType.objectTypeUpdate;
export const getAllRole = state => state.ObjectType.roles;
export const getAllObjectType = state => state.ObjectType.objectTypes;
export const openModalAddObjectType = state => state.ObjectType.openModalAddObjectType;
export const openModalUpdateObjectType = state => state.ObjectType.openModalUpdateObjectType;
export const openModalUpdatePermissions = state => state.ObjectType.openModalUpdatePermissions;
export const getObjectTypeById = state => state.ObjectType.objectTypeUpdate;
export const listPermission = state => state.ObjectType.listPermission;
export const editPermistionData = state => state.ObjectType.editPermistionData;
export default objectTypeReducer;