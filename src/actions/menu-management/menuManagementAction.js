import { MessageBox, Notification } from "element-react";
import * as CONFIG from "../../config/configUrl";
import * as $http from "../../utils/httpProvider";
import React from 'react';
import {
  fetchMenuData,
  openModalCreateMenuItem,
  closeModalCreateMenuItem,
  openModalUpdateMenuItem,
  closeModalUpdateMenuItem,
  openModalEditMemberMenuItem,
  closeModalEditMemberMenuItem,
  loadUpdateDataMenuItem,
  changeUpdateMenuData,
  changeUpdateMenuRoleData,
  loadUpdateDataMenuRole,
  changeCreateMenuData,
  clearCreateMenuData
} from "./index";
import { Trans } from 'react-i18next';

export const fnGetAllMenuData = () => {
  return dispatch => {
    $http
      .getData(CONFIG.API_BASE_URL + "/v1/rest/menu")
      .then(response => {
        dispatch(fetchMenuData(response.data.data));
        return response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fnCreateMenuData = menuItem => {
  return dispatch => {
    console.log(menuItem);
    // Validate Data;
    if (menuItem.name === undefined || menuItem.name === "") {
      menuItem.name = null;
    }
    if (menuItem.parentId === undefined || menuItem.parentId === "") {
      menuItem.parentId = null;
    } else {
      menuItem.parentId = parseInt(menuItem.parentId);
    }
    if (menuItem.enable === undefined || menuItem.enable === "") {
      menuItem.enable = false;
    }

    $http
      .postData(CONFIG.API_BASE_URL + "/v1/rest/menu", menuItem)
      .then(response => {
        Notification({
          title: <Trans i18nKey="MenuList.popup-success" />,
          message: <Trans i18nKey="MenuList.popup-success-text" />,
          type: "success"
        });
        dispatch(fnToggleCreateModel(false));
        dispatch(clearCreateMenuData());
        dispatch(fnGetAllMenuData());
        return response.data.data;
      })
      .catch(error => {
        if (error.response !== undefined && error.response.data !== undefined) {
          let errData = error.response.data;
          Notification({
            title: errData.error,
            message: errData.message,
            type: "error"
          });
        }
      });
  };
};

export const fnUpdateMenuData = menuItem => {
  return dispatch => {
    $http
      .putData(CONFIG.API_BASE_URL + "/v1/rest/menu", menuItem)
      .then(response => {
        Notification({
          title: <Trans i18nKey="MenuList.popup-success" />,
          message: <Trans i18nKey="MenuList.popup-success-text-update" />,
          type: "success"
        });
        dispatch(fnToggleUpdateModel(false));
        dispatch(fnGetAllMenuData());
        return response.data.data;
      })
      .catch(error => {
        console.log(error);
        let errData = error.response.data;
        Notification({
          title: errData.error,
          message: errData.message,
          type: "error"
        });
      });
  };
};

export const fnUpdateMenuRoleData = menuItem => {
  return dispatch => {
    $http
      .putData(CONFIG.API_BASE_URL + "/v1/rest/menu-role/", menuItem)
      .then(response => {
        Notification({
          title: <Trans i18nKey="MenuList.popup-success" />,
          message: <Trans i18nKey="MenuList.popup-success-text-update-role" />,
          type: "success"
        });
        console.log(response);
        dispatch(fnToggleEditMemberModel(false));
        dispatch(fnGetAllMenuData());
        return response.data.data;
      })
      .catch(error => {
        console.log(error);
        let errData = error.response.data;
        Notification({
          title: errData.error,
          message: errData.message,
          type: "error"
        });
      });
  };
};

export const fnGetMenuItemById = id => {
  return dispatch => {
    $http
      .getData(CONFIG.API_BASE_URL + "/v1/rest/menu/" + id)
      .then(response => {
        dispatch(loadUpdateDataMenuItem(response.data.data));
        return response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fnGetMenuRoleDataByMenuId = id => {
  return dispatch => {
    $http
      .getData(CONFIG.API_BASE_URL + "/v1/rest/menu-role/menuId/" + id)
      .then(response => {
        console.log(response);
        if (response.data.data !== undefined && response.data.data !== []) {
          let respData = response.data.data;
          let roleCodes = [];
          respData.map(x => {
            roleCodes.push(x.roleCode);
          });
          let payload = {
            menuId: id,
            roleCodes: roleCodes
          };
          dispatch(loadUpdateDataMenuRole(payload));
          return response.data.data;
        } else {
          let payload = {
            menuId: id,
            roleCode: []
          };
          dispatch(loadUpdateDataMenuRole(payload));
          return payload;
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fnDeleteMenuData = id => {
  return dispatch => {
    MessageBox.confirm(<Trans i18nKey={'MenuList.popup-delete-menu'} />, "Warning", {
      confirmButtonText: <Trans i18nKey={'MenuList.button-ok'} />,
      cancelButtonText: <Trans i18nKey={'MenuList.button-cancel'} />,
      type: "warning"
    }).then(() => {
      $http
        .deleteData(CONFIG.API_BASE_URL + "/v1/rest/menu/" + id)
        .then(response => {
          console.log(response);
          Notification({
            title: <Trans i18nKey="MenuList.popup-success" />,
            message: <Trans i18nKey="MenuList.popup-delete-text" />,
            type: "success"
          });
          dispatch(fnGetAllMenuData());
          return response.data.data;
        })
        .catch(error => {
          console.log(error);
          let errData = error.response.data;
          Notification({
            title: errData.error,
            message: errData.message,
            type: "error"
          });
        });
    });
  };
};

export const fnToggleCreateModel = flag => {
  return dispatch => {
    if (flag) {
      dispatch(openModalCreateMenuItem());
    } else {
      dispatch(closeModalCreateMenuItem());
    }
  };
};

export const fnToggleUpdateModel = (flag, id) => {
  return dispatch => {
    if (flag) {
      dispatch(fnGetMenuItemById(id));
      dispatch(openModalUpdateMenuItem());
    } else {
      dispatch(closeModalUpdateMenuItem());
    }
  };
};

export const fnToggleEditMemberModel = (flag, id) => {
  return dispatch => {
    if (flag) {
      dispatch(fnGetMenuRoleDataByMenuId(id));
      dispatch(openModalEditMemberMenuItem());
    } else {
      dispatch(closeModalEditMemberMenuItem());
    }
  };
};

export const fnChangeUpdateMenuData = menuData => {
  return dispatch => {
    dispatch(changeUpdateMenuData(menuData));
  };
};

export const fnChangeCreateMenuData = menuData => {
  return dispatch => {
    dispatch(changeCreateMenuData(menuData));
  };
};

export const fnChangeUpdateMenuRoleData = menuData => {
  return dispatch => {
    dispatch(changeUpdateMenuRoleData(menuData));
  };
};