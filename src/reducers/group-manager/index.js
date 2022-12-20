import { GROUP_SET_FILTER, GET_SELECT_GROUP, CHANGE_USER_MEMBER, EDIT_GROUP_USER, LOAD_GROUP_USER, ADD_USER_TO_GROUP, INIT_DATA_USER, OPEN_USER_GROUP_DIALOG, CLOSE_USER_GROUP_DIALOG, GROUP_UPDATE_GROUP, GROUP_CHANGE_UPDATE_DATA, GROUP_CLOSE_UPDATE_GROUP_DIALOG, GROUP_OPEN_UPDATE_GROUP_DIALOG, GROUP_GET_GROUP_BY_GROUPNAME, GROUP_REMOVE_GROUP_BY_GROUPNAME, GROUP_GET_ALL_GROUP, GROUP_CHANGE_CREATE_DATA, GROUP_CLOSE_CREATE_GROUP_DIALOG, GROUP_OPEN_CREATE_GROUP_DIALOG } from '../../actions/group-manager'

const initalState = {
    groupData: [],
    formGroup: {
        groupName: "",
        description: "",
        userName: [],
        directoryId: "",
        active: true
    },
    selectdirectoryId: "",
    selectGroupName: "",
    formUserGroup: [],
    userData: [],
    filter: "",
    showCreateGroupDialog: false,
    showUpdateGroupDialog: false,
    showUserGroupDialog: false,
};

export function groupManagerReducer(state = initalState, action) {
    switch (action.type) {
        case GROUP_SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        case GROUP_GET_ALL_GROUP:
            return {
                ...state,
                groupData: action.payload
            };
        case GROUP_CHANGE_CREATE_DATA:
            console.log("Payload Data: ", action.payload);
            return {
                ...state,
                formGroup: Object.assign({}, state.formGroup, { [action.payload.key]: action.payload.value })
            };
        case GROUP_CLOSE_CREATE_GROUP_DIALOG:
            return {
                ...state,
                showCreateGroupDialog: false
            };
        case GROUP_OPEN_CREATE_GROUP_DIALOG:
            return {
                ...state,
                showCreateGroupDialog: true,
                formGroup: {
                    groupName: "",
                    description: "",
                },
            };
        case GROUP_REMOVE_GROUP_BY_GROUPNAME:
            return state.filter(groupData => groupData.groupName !== action.payload.groupName);
        case GROUP_UPDATE_GROUP:
            return {
                ...state,
                formGroup: {
                    groupName: action.payload.groupName,
                    description: action.payload.description,
                },
            };
        case GROUP_GET_GROUP_BY_GROUPNAME:
            return {
                ...state,
                formGroup: {
                    groupName: action.payload.groupName,
                    description: action.payload.description,
                },
            };
        case GROUP_CHANGE_UPDATE_DATA:
            console.log("Payload Data: ", action.payload);
            return {
                ...state,
                formGroup: Object.assign({}, state.formGroup, { [action.payload.key]: action.payload.value })
            };
        case GROUP_CLOSE_UPDATE_GROUP_DIALOG:
            return {
                ...state,
                showUpdateGroupDialog: false
            };
        case GROUP_OPEN_UPDATE_GROUP_DIALOG:
            return {
                ...state,
                showUpdateGroupDialog: true
            };
        case CHANGE_USER_MEMBER:
            return {
                ...state,
                formGroup: Object.assign({}, state.formGroup, { users: action.payload })
            };
        // Edit user in group
        case INIT_DATA_USER:
            return {
                ...state,
                userData: action.payload
            };
        case CLOSE_USER_GROUP_DIALOG:
            return {
                ...state,
                showUserGroupDialog: false
            };
        case OPEN_USER_GROUP_DIALOG:
            return {
                ...state,
                showUserGroupDialog: true
            };
        case ADD_USER_TO_GROUP:
            return {
                ...state,
                formGroup: {
                    groupName: action.payload.groupName,
                    description: action.payload.description,
                    userName: action.payload.description,
                    active: true
                },
            };
        case LOAD_GROUP_USER:
            return {
                ...state,
                formUserGroup: action.payload,
            };
        case EDIT_GROUP_USER:
            return {
                ...state,
            };
        case GET_SELECT_GROUP:
            return {
                ...state,
                selectGroupName: action.payload
            };
        default: return state;
    }

}

export const getAllGroup = state => state.GroupManager.groupData;
export const getShowCreateGroupDialog = state => state.GroupManager.showCreateGroupDialog;
export const getFormGroup = state => state.GroupManager.formGroup;
export const getShowUpdateGroupDialog = state => state.GroupManager.showUpdateGroupDialog;
export const getFilter = state => state.GroupManager.filter;
// Edit user in group
export const getAllUser = state => state.GroupManager.userData;
export const getShowUserGroupDialog = state => state.GroupManager.showUserGroupDialog;
export const selectGroupName = state => state.GroupManager.selectGroupName;
export const selectdirectoryId = state => state.GroupManager.selectdirectoryId;
export const getFormUserGroup = state => state.GroupManager.formUserGroup;

export default groupManagerReducer;