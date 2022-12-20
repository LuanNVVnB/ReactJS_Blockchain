import {
    getAllRole, editRoleMember, deleteRole, createRole, closeCreateRole, closeRoleEditMember,
    openCreateRole, loadEditRoleMember, getListGroup, getListUser,
    changeUserMember, changeGroupMember, changeCreateData, getUser,
    getAllPermission, setValuePermission, openModalUpdatePermissions, loadEditPermissionUpdate
} from "./index";
import * as CONFIG from '../../config/configUrl';
import * as $http from '../../utils/httpProvider';
import { Notification, MessageBox } from "element-react";

export const fnGetAllPermission = () => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/rest/permission/list")
            .then(response => {
                dispatch(getAllPermission(response.data));
                return response.data
            })
            .catch(error => {
                console.log(error)
            });
    }
};
export const fnsetValuePermission = (data) => {
    return dispatch => dispatch(setValuePermission(data));
};
export const fnEditPermission = (code, permissionIds) => {
    return dispatch => {
        let dataSelected = { code, permissionIds };
        $http.putData(CONFIG.API_BASE_URL + `/rest/role/setPermissions`, dataSelected)
            .then(res => {
                dispatch(openModalUpdatePermissions(false));
                dispatch(fnGetAllRole());
                Notification({
                    title: 'Success',
                    message: 'Edit Permission success',
                    type: 'success'
                });
                return res;
            }).catch(error => {
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail,
                    type: 'error'
                })
            })
    }
};
export const fnOpenModalUpdatePermissions = (flag) => {
    return dispatch => {
        dispatch(openModalUpdatePermissions(flag));
        if (!flag) {
            dispatch(fnsetValuePermission({ key: "permissionId", value: [] }));
        }
    }
};
export const fnLoadEditPermissionUpdate = (code, row) => {
    let RolePermission = row === null ? [] : row;
    let permissionId = [];
    let values = [];
    RolePermission.forEach(data => {
        permissionId.push(data.id);
        values.push(data.ObjectType.name + ' - ' + data.PermissionType.name)
    })
    return dispatch => {
        dispatch(loadEditPermissionUpdate({ code, permissionId, values }));
        dispatch(fnOpenModalUpdatePermissions(true));
    }
};
export const fnGetAllRole = () => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + `/rest/role/searchRole?&startAt=0&maxResults=100`)
            .then(res => {
                dispatch(getAllRole(res.data));
                return res.data;
            }).catch(error => {
                throw error;
            })
    }
};

export const fnGetListUser = () => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + `/rest/user/search?startAt=0&maxResults=100&includeInActive=true&username=`)
            .then(res => {
                dispatch(getListUser(res));
                return res;
            }).catch(error => {
                throw error;
            })
    }
};

export const fnGetListGroup = () => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + `/rest/group/search?startAt=0&maxResults=100&includeInActive=true&groupName=`)
            .then(res => {
                dispatch(getListGroup(res));
                return res;
            }).catch(error => {
                throw error;
            })
    }
};

export const fnEditRoleMember = (data) => {
    return dispatch => {
        $http.putData(CONFIG.API_BASE_URL + `/rest/role/edit-member`, data)
            .then(response => {
                dispatch(editRoleMember(response));
                dispatch(fnCloseEditRoleMember());
                dispatch(fnGetAllRole());
                Notification({
                    title: 'Success',
                    message: 'Edit Role Member success',
                    type: 'success'
                });
                return response;
            })
            .catch(error => {
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail,
                    type: 'error'
                })
            })
    }
};

export const fnLoadEditRoleMember = (row) => {
    let users = [];
    let groups = [];
    let code = row.code;

    row.UserRoles.forEach(data => {
        if (data.username !== null) {
            users.push(data.username);
        }
        if (data.group_name !== null) {
            groups.push(data.group_name);
        }
    })

    return dispatch => {
        dispatch(loadEditRoleMember({ code, users, groups }));
    }
};

export const fnDeleteRole = (role) => {
    return dispatch => {
        MessageBox.confirm('This will delete role. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
        }).then(() => {
            $http.deleteData(CONFIG.API_BASE_URL + '/rest/role?code=' + role)
                .then(response => {
                    dispatch(deleteRole(response));
                    Notification({
                        title: 'Success',
                        message: 'Remove role success',
                        type: 'success'
                    });
                    dispatch(fnGetAllRole());
                    return response;
                }).catch(error => {
                    throw error;
                });
        }).catch(() => {
            Notification({
                title: 'Info',
                message: 'Remove canceled',
                type: 'info'
            });
        });
    }
};

export const fnCreateRole = (role) => {
    return dispatch => {
        $http.postData(CONFIG.API_BASE_URL + '/rest/role', role)
            .then(response => {
                dispatch(createRole(response));
                dispatch(fnCloseCreateRole());
                dispatch(fnGetAllRole());
                dispatch(fnChangeCreateData({ "key": "name", "value": "" }));
                dispatch(fnChangeCreateData({ "key": "code", "value": "" }));
                Notification({
                    title: 'Success',
                    message: 'Create Role success',
                    type: 'success'
                });
                return response;
            }).catch(error => {
                Notification({
                    title: 'Errors',
                    message: error.response.data.errorDetail,
                    type: 'error'
                })
            })
    }
};

export const fnOpenCreateRole = () => {
    return dispatch => {
        dispatch(openCreateRole(true));
    }
};

export const fnCloseCreateRole = () => {
    return dispatch => {
        dispatch(closeCreateRole(false));
    }
};

export const fnCloseEditRoleMember = () => {
    return dispatch => {
        dispatch(closeRoleEditMember(false));
    }
};

export const fnChangeUserMember = (users) => {
    return dispatch => {
        dispatch(changeUserMember(users));
    }
};

export const fnChangeGroupMember = (groups) => {
    return dispatch => {
        dispatch(changeGroupMember(groups));
    }
};

export const fnChangeCreateData = (createData) => {
    return dispatch => {
        dispatch(changeCreateData(createData));
    }
};

export const fnGetUser = () => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + `/user-profile`)
            .then(res => {
                dispatch(getUser(res.data));
                console.log("RES:", res.data)
                // let userName = res.data.data.username;
                // dispatch(fnCheckPermission(userName, "ROLE", "VIEW"))
                return res;
            }).catch(error => {
                throw error;
            })
    }
};