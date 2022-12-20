import { setFilter, getSelectGroup, openUserGroupDialog, closeUserGroupDialog, loadGroupUser, initDataUser, addUserToGroup, getGroupByGroupname, openUpdateGroupDialog, changeUpdateData, updateGroup, closeUpdateGroupDialog, getAllGroup, createGroup, closeCreateGroupDialog, changeCreateData, openCreateGroupDialog, changeUserMember } from "./index"
import * as CONFIG from '../../config/configUrl'
import * as $http from '../../utils/httpProvider'
import { Notification, MessageBox } from "element-react";

//Edit User in Group
export const fnAddUserToGroup = (groupName, username) => {
    var dataUserGroup = {
        groupName: groupName,
        username: username
    }
    return dispatch => {
        $http.putData(CONFIG.API_BASE_URL + "/rest/group/add", dataUserGroup, { "Content-type": "application/json" })
            .then(response => {
                dispatch(addUserToGroup(response.data));
                dispatch(fnCloseUserGroupDialog());
                dispatch(fnGetAllGroup());
                Notification({
                    title: 'Success',
                    message: 'Add user in group success',
                    type: 'success'
                })
            })
            .catch(error => {
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail === undefined ? error.response.data.errors[0] : error.response.data.errorDetail,
                    type: 'error'
                })
            });
    }
}

export const fnInitDataUser = () => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/rest/user/search?username=")
            .then(response => {
                dispatch(initDataUser(response.data));
                return response.data;
            })
            .catch(e => {
                console.log(e);
            });
    }
}
export const fnGetSelectGroup = (selectGroupName) => {
    return dispatch => {
        dispatch(getSelectGroup(selectGroupName));
        return selectGroupName;
    }
}
export const fnEditGroupUser = (groupName, directoryId) => {
    return dispatch => {
        dispatch(fnInitDataUser());
        dispatch(fnLoadGroupUser(groupName, directoryId));
        dispatch(fnGetSelectGroup(groupName));
        dispatch(fnOpenUserGroupDialog());
    }
}
export const fnLoadGroupUser = (groupName, directoryId) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/rest/group/user?groupName=" + groupName)
            .then(response => {
                dispatch(loadGroupUser(response.data));
                console.log(response.data);
                return response.data;
            })
            .catch(e => {
                console.log(e);
            });
    }
}
export const fnRemoveUserInGroup = (user, groupName) => {
    var dataGR = {
        groupName: groupName,
        username: user.username
    };
    return dispath => {
        MessageBox.confirm('This will delete user in group. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
        }).then(() => {
            $http.putData(CONFIG.API_BASE_URL + "/rest/group/remove", dataGR)
                .then(response => {
                    dispath(fnCloseUserGroupDialog());
                    Notification({
                        title: 'Success',
                        message: 'Remove user in group success',
                        type: 'success'
                    })
                })
                .catch(e => {
                    console.log(e);
                });
        }).catch(() => {
            Notification({
                title: 'Info',
                message: 'Remove canceled',
                type: 'info'
            });
        });
    }
}

export const fnCloseUserGroupDialog = () => {
    return dispatch => {
        dispatch(closeUserGroupDialog(false));
    }
}

export const fnOpenUserGroupDialog = () => {
    return dispatch => {
        dispatch(openUserGroupDialog(true));
    }
}
export const fnChangeUserMember = (users) => {
    return dispatch => {
        dispatch(changeUserMember(users));
    }
};
//Manager Group
export const fnGetGroupByGroupname = (row) => {
    return dispatch => {
        dispatch(getGroupByGroupname(row));
        dispatch(openUpdateGroupDialog());
        dispatch(fnGetAllGroup());
    };
}
export const fnRemoveGroup = (groupName) => {
    console.log("Call fnRemoveGroup", groupName);
    return dispath => {
        MessageBox.confirm('This will delete group. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
        }).then(() => {
            $http.deleteData(CONFIG.API_BASE_URL + "/rest/group?groupName=" + groupName)
                .then(response => {
                    console.log(response.data);
                    dispath(fnGetAllGroup());
                    Notification({
                        title: 'Success',
                        message: 'Remove group success',
                        type: 'success'
                    })
                })
                .catch(e => {
                    console.log(e);
                });
        }).catch(() => {
            Notification({
                title: 'Info',
                message: 'Remove canceled',
                type: 'info'
            });
        });
    }
}
export const fnSetFilter = (filter) => {
    return dispatch => dispatch(setFilter(filter));
}
export const fnGetAllGroup = (groupname) => {
    var gr = groupname ? groupname : '';
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/rest/group/search?groupName=" + gr)
            .then(response => {
                dispatch(getAllGroup(response.data));
                console.log(response.data);
                return response.data;
            })
            .catch(e => {
                console.log(e);
            });
    }
}

export const fnCreateGroup = (formGroup) => {
    formGroup['active'] = true;
    return dispatch => {
        $http.postData(CONFIG.API_BASE_URL + "/rest/group", formGroup, { "Content-type": "application/json" })
            .then(response => {
                dispatch(createGroup(response.data));
                dispatch(closeCreateGroupDialog());
                dispatch(fnGetAllGroup());
                Notification({
                    title: 'Success',
                    message: 'Create group success',
                    type: 'success'
                })
                return response.data;
            })
            .catch(error => {
                console.log(error.response.data.errorDetail)
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail === undefined ? error.response.data.errors[0].msg : error.response.data.errorDetail,
                    type: 'error'
                })
            });
    }
}
export const fnOpenCreateGroupDialog = () => {
    return dispatch => {
        dispatch(openCreateGroupDialog(true));
    }
}
export const fnCloseCreateGroupDialog = () => {
    return dispatch => {
        dispatch(closeCreateGroupDialog(false));
    }
}
export const fnChangeCreateData = (createData) => {
    return dispatch => {
        dispatch(changeCreateData(createData));
    }
}
export const fnCloseUpdateGroupDialog = () => {
    return dispatch => {
        dispatch(closeUpdateGroupDialog(false));
    }
}

export const fnOpenUpdateGroupDialog = () => {
    return dispatch => {
        dispatch(openUpdateGroupDialog(true));
    }
}
export const fnChangeUpdateData = (updateData) => {
    return dispatch => {
        dispatch(changeUpdateData(updateData));
    }
}
export const fnUpdateGroup = (formGroupUpdate) => {
    return dispatch => {
        $http.putData(CONFIG.API_BASE_URL + "/rest/group", formGroupUpdate, { "Content-type": "application/json" })
            .then(response => {
                dispatch(updateGroup(response.data));
                dispatch(closeUpdateGroupDialog());
                dispatch(fnGetAllGroup());
                Notification({
                    title: 'Success',
                    message: 'Update group success',
                    type: 'success'
                })
                return response
            })
            .catch(error => {
                error.response.data.errors.forEach(e =>
                    Notification({
                        title: 'Errors',
                        message: error.response.data.errorDetail === undefined ? error.response.data.errors[0].msg : error.response.data.errorDetail,
                        type: 'error'
                    })
                );
            });
    }
}
