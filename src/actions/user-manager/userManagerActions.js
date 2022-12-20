import { getAllUserMataMask,openExportUserDialog, changeExportUserData, setPageSize, setCurrentPage, setFilter, filterUserByUsername, exportFileUser, downloadTemplate, changeCreateData, changeUpdateData, getUserByUsername, closeImportFormDialog, openImportFormDialog, closeUpdateUserDialog, openUpdateUserDialog, closeCreateUserDialog, openCreateUserDialog, updateUser, createUser, setTotal, showDialogUserTrash, getUserTrash, removeUserTrash } from "./index"
import * as CONFIG from '../../config/configUrl'
import * as $http from '../../utils/httpProvider'
import { Notification, MessageBox } from "element-react";
import React from "react";
import { Trans } from 'react-i18next';

// Export Excel.
export const fnGetAllUserMetaMask = ()=>{
    return dispatch => {
        $http.getData(CONFIG.API_META_MASK_URL + "/get-all")
            .then(response => {
                if(response.data.code == "Success")
                dispatch(getAllUserMataMask(response.data.data));
                else Notification({
                    title: 'Error',
                    message: 'user not permission ',
                    type: 'error'
                })
            }
            )
            .catch(e => {
                console.log(e);
            });
    }
}

export const fnPostRigisterUserVoted = (user) => {
    return dispatch => {
        $http.postData(CONFIG.API_META_MASK_URL + "/rigiter-voted/",user )
            .then(response => {
                if (response.data.code == "Success"){
                    
                    console.log("usermetamask", response)
                    dispatch(fnGetAllUserMetaMask());
                    Notification({
                        title: 'Success',
                        message: 'register User success',
                        type: 'success'
                    })
                } else Notification({
                    title: 'Error',
                    message: response.data.message,
                    type: 'error'
                })
               

            }
            )
            .catch(e => {
                console.log(e);
                Notification({
                    title: 'Error',
                    message: 'user not permission ',
                    type: 'error'
                })
            });
    }
}

export const fnOpenExportUserDialog = (flag) => {
    return dispatch => {
        dispatch(openExportUserDialog(flag));
    }
};
export const fnChangeExportUserData = (data) => {
    return dispatch => {
        dispatch(changeExportUserData(data));
    }
}
export const fnExportFileUser = (exportForm) => {
    console.log(exportForm)
    return dispatch => {
        $http.postDataWithResponeTypeHaveData(CONFIG.API_BASE_URL + "/rest/export-user", exportForm, { "Content-type": "application/json" }, "arraybuffer")
            .then(response => {
                var filename = exportForm.fileName + '.' + exportForm.exportType;
                var linkElement = document.createElement("a");
                try {
                    var blob = new Blob([response.data]);
                    var url = window.URL.createObjectURL(blob);

                    linkElement.setAttribute("href", url);
                    linkElement.setAttribute("download", filename);
                    var clickEvent = new MouseEvent("click", {
                        view: window,
                        bubbles: true,
                        cancelable: false
                    });
                    linkElement.dispatchEvent(clickEvent);
                } catch (ex) {
                    console.log(ex);
                }
                dispatch(exportFileUser(response.data));
                dispatch(fnOpenExportUserDialog(false));
                Notification({
                    title: 'Success',
                    message: 'Export file User success',
                    type: 'success'
                })
                return response.data
            }
            )
            .catch(e => {
                console.log(e);
            });
    }
}
export const fnDownloadTemplate = () => {
    return dispatch => {
        $http.getDataWithResponeType(CONFIG.API_BASE_URL + "/rest/download-template", { "Content-type": "application/json" }, "arraybuffer")
            .then(response => {
                dispatch(downloadTemplate(response.data));
                var filename = "UserTemplate.xls";
                var contentType = "application/vnd.ms-excel";

                var linkElement = document.createElement("a");
                try {
                    var blob = new Blob([response.data], { type: contentType });
                    var url = window.URL.createObjectURL(blob);

                    linkElement.setAttribute("href", url);
                    linkElement.setAttribute("download", filename);

                    var clickEvent = new MouseEvent("click", {
                        view: window,
                        bubbles: true,
                        cancelable: false
                    });
                    linkElement.dispatchEvent(clickEvent);
                } catch (ex) {
                    console.log(ex);
                }
                Notification({
                    title: 'Success',
                    message: 'Download template success',
                    type: 'success'
                })
                return response.data;
            })
            .catch(e => {
                console.log(e);
            });
    }
}
// End export Excel.
export const fnResetFilter = () => {
    return dispatch => {
        dispatch(setCurrentPage(0));
        dispatch(setPageSize(10));
        dispatch(setFilter(''));
    }
}

export const fnSearch = (filter, paging) => {
    return dispatch => {
        dispatch(setCurrentPage(0));
        dispatch(setPageSize(10));
        dispatch(fnFilterUserByUsername(filter, 0, paging.pageSize));
    }
}

export const fnChangePageSize = (pageSize, paging, filter) => {
    return dispatch => {
        dispatch(setCurrentPage(0));
        dispatch(setPageSize(pageSize));
        dispatch(fnFilterUserByUsername(filter, 0, pageSize));
    }
}

export const fnChangeCurrentPage = (currentPage, paging, filter) => {
    return dispatch => {
        dispatch(setCurrentPage(currentPage));
        dispatch(fnFilterUserByUsername(filter, currentPage - 1, paging.pageSize));
    }
}

export const fnSetFilter = (filter) => {
    return dispatch => dispatch(setFilter(filter));
}

export const fnFilterUserByUsername = (username, startAt, pageSize) => {
    var us = username ? username : '';
    var sa = startAt ? startAt : 0;
    var ps = pageSize ? pageSize : 10;
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/rest/user/search?username=" + us + "&startAt=" + sa + "&maxResults=" + ps)
            .then(response => {
                dispatch(filterUserByUsername(response.data));
                return response.data
            })
            .catch(error => {
                console.log(error)
            });
        dispatch(fnSetTotal(us));
    }
}

export const fnSetTotal = (username) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/rest/user/count?username=" + username)
            .then(response => {
                dispatch(setTotal(response.data));
                return response.data
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const fnGetUserByUsername = (username) => {
    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/rest/user?username=" + username)
            .then(response => {
                dispatch(getUserByUsername(response.data));
                dispatch(openUpdateUserDialog());
                return response.data
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const fnUpdateUser = (formUserUpdate, paging) => {
    return dispatch => {
        console.log(formUserUpdate)
        $http.putData(CONFIG.API_BASE_URL + "/rest/user", formUserUpdate, { "Content-type": "application/json" })
            .then(response => {
                console.log("UPDATE USER");
                dispatch(updateUser(response.data));
                dispatch(closeUpdateUserDialog());
                dispatch(setCurrentPage(paging.currentPage));
                dispatch(fnFilterUserByUsername("", paging.currentPage > 0 ? paging.currentPage - 1 : paging.currentPage, paging.pageSize));
                Notification({
                    title: <Trans i18nKey="MenuList.popup-success" />,
                    message: <Trans i18nKey="UserList.message-update-user" />,
                    type: 'success'
                })
                return response
            })
            .catch(error => {
                error.response.data.errors.forEach(e =>
                    Notification({
                        title: 'Errors',
                        message: Object.values(e.msg),
                        type: 'error'
                    })
                );
            });
    }
}

export const fnCreateUser = (formUser, paging) => {
    return dispatch => {
        $http.postData(CONFIG.API_BASE_URL + "/rest/user", formUser, { "Content-type": "application/json" })
            .then(response => {
                dispatch(createUser(response.data));
                dispatch(closeCreateUserDialog());
                dispatch(setCurrentPage(paging.currentPage));
                dispatch(fnFilterUserByUsername("", paging.currentPage > 0 ? paging.currentPage - 1 : paging.currentPage, paging.pageSize));
                Notification({
                    title: <Trans i18nKey="MenuList.popup-success" />,
                    message: <Trans i18nKey="UserList.message-create-user" />,
                    type: 'success'
                })
            })
            .catch(error => {
                console.log(error)
                error.response.data.errors.forEach(e =>
                    Notification({
                        title: 'Errors',
                        message: Object.values(e.msg),
                        type: 'error'
                    })
                );
            });
    }
}

export const fnRemoveUser = (userName, paging) => {
    console.log("Call fnRemoveUser", userName);
    return dispatch => {
        MessageBox.confirm(<Trans i18nKey={'UserList.popup-delete-menu'} />, 'Warning', {
            confirmButtonText: <Trans i18nKey={'MenuList.button-ok'} />,
            cancelButtonText: <Trans i18nKey={'MenuList.button-cancel'} />,
            type: 'warning'
        }).then(() => {
            $http.deleteData(CONFIG.API_BASE_URL + "/rest/user?username=" + userName)
                .then(response => {
                    if (
                        paging.total - 1 ===
                        paging.currentPage * paging.pageSize - paging.pageSize
                    ) {
                        dispatch(setCurrentPage(paging.currentPage - 1));
                        dispatch(
                            fnFilterUserByUsername(
                                "",
                                paging.currentPage - 2 < 0 ? 0 : paging.currentPage - 2,
                                paging.pageSize
                            )
                        );
                    } else {
                        dispatch(setCurrentPage(paging.currentPage));
                        dispatch(
                            fnFilterUserByUsername(
                                "",
                                paging.currentPage - 1 < 0 ? 0 : paging.currentPage - 1,
                                paging.pageSize
                            )
                        );
                    }
                    dispatch(fnGetAllUserTrash());
                    Notification({
                        title: 'Success',
                        message: 'Remove user success',
                        type: 'success'
                    })
                })
                .catch(e => {
                    console.log(e);
                });
        }).catch(() => {
            Notification({
                title: < Trans i18nKey={'UserList.info'} />,
                message: < Trans i18nKey={'UserList.remove-cancel'} />,
                type: "info"
            });
        });
    }
}
export const fnCloseCreateUserDialog = () => {
    return dispatch => {
        dispatch(closeCreateUserDialog(false));
    }
}

export const fnOpenCreateUserDialog = () => {
    return dispatch => {
        dispatch(openCreateUserDialog(true));
    }
}
export const fnCloseUpdateUserDialog = () => {
    return dispatch => {
        dispatch(closeUpdateUserDialog(false));
    }
}

export const fnOpenUpdateUserDialog = () => {
    return dispatch => {
        dispatch(openUpdateUserDialog(true));
    }
}

export const fnCloseImportFormDialog = () => {
    return dispatch => {
        dispatch(closeImportFormDialog(false));
    }
}

export const fnOpenImportFormDialog = () => {
    return dispatch => {
        dispatch(openImportFormDialog(true));
    }
}

export const fnChangeUpdateData = (updateData) => {
    return dispatch => {
        dispatch(changeUpdateData(updateData));
    }
}
export const fnChangeCreateData = (createData) => {
    return dispatch => {
        dispatch(changeCreateData(createData));
    }
}

export const fnShowDialogTrash = (status) => {
    return dispatch => {
        dispatch(showDialogUserTrash(status))
    }
}

export const fnGetAllUserTrash = (userDataTrash) => {

    return dispatch => {
        $http.getData(CONFIG.API_BASE_URL + "/rest/user/trash")
            .then(response => {
                dispatch(getUserTrash(response.data));
            })
            .catch(error => {
                console.log(error)
            });
    }
};

export const fnRecoveryUser = (userId) => {
    return dispatch => {
        MessageBox.confirm('This will recovery user. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
        }).then(() => {
            $http.putData(CONFIG.API_BASE_URL + "/rest/user/trash/" + userId)
                .then(response => {
                    dispatch(fnFilterUserByUsername());
                    dispatch(removeUserTrash(userId))
                    Notification({
                        title: 'Success',
                        message: 'Recovery User success',
                        type: 'success'
                    })
                })
                .catch(error => {
                    console.log(error)
                    error.response.data.errors.forEach(e =>
                        Notification({
                            title: 'Errors',
                            message: Object.values(e.msg),
                            type: 'error'
                        })
                    );
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



