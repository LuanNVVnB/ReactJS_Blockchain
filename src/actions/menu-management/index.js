export const MENU_GET_ALL_MENU_DATA = "MENU_GET_ALL_MENU_DATA";
export const MENU_SET_MENU_DATA = "MENU_SET_MENU_DATA";
export const MENU_CREATE_MENU_ITEM = "MENU_CREATE_MENU_ITEM";
export const MENU_EDIT_MEMBER_MENU_ITEM = "MENU_EDIT_MEMBER_MENU_ITEM";
export const MENU_UPDATE_MENU_ITEM = "MENU_UPDATE_MENU_ITEM";
export const MENU_DELETE_MENU_ITEM = "MENU_DELETE_MENU_ITEM";

export const MENU_LOAD_UPDATE_MENU_ITEM = "MENU_LOAD_UPDATE_MENU_ITEM";
export const MENU_LOAD_UPDATE_MENU_ROLE = "MENU_LOAD_UPDATE_MENU_ROLE";

// ACTION OPEN MODAL
export const MENU_OPEN_CREATE_MENU_ITEM_MODAL =
  "MENU_OPEN_CREATE_MENU_ITEM_MODAL";
export const MENU_OPEN_UPDATE_MENU_ITEM_MODAL =
  "MENU_OPEN_UPDATE_MENU_ITEM_MODAL";
export const MENU_OPEN_UPDATE_MEMBER_MENU_ITEM_MODAL =
  "MENU_OPEN_UPDATE_MEMBER_MENU_ITEM_MODAL";
export const MENU_CLOSE_CREATE_MENU_ITEM_MODAL =
  "MENU_CLOSE_CREATE_MENU_ITEM_MODAL";
export const MENU_CLOSE_UPDATE_MENU_ITEM_MODAL =
  "MENU_CLOSE_UPDATE_MENU_ITEM_MODAL";
export const MENU_CLOSE_UPDATE_MEMBER_MENU_ITEM_MODAL =
  "MENU_CLOSE_UPDATE_MEMBER_MENU_ITEM_MODAL";
export const MENU_CHANGE_UPDATE_MENU_DATA = "MENU_CHANGE_UPDATE_MENU_DATA";
export const MENU_CHANGE_UPDATE_MENU_ROLE_DATA =
  "MENU_CHANGE_UPDATE_MENU_ROLE_DATA";
export const MENU_CLEAR_CREATE_MENU_DATA = "MENU_CLEAR_CREATE_MENU_DATA";
export const MENU_CLEAR_UPDATE_MENU_DATA = "MENU_CLEAR_UPDATE_MENU_DATA";

export const MENU_CHANGE_CREATE_MENU_DATA = "MENU_CHANGE_CREATE_MENU_DATA";

export function fetchMenuData(menuData) {
  return {
    type: MENU_GET_ALL_MENU_DATA,
    payload: menuData
  };
}

export function changeUpdateMenuData(menuData) {
  return {
    type: MENU_CHANGE_UPDATE_MENU_DATA,
    payload: menuData
  };
}

export function changeCreateMenuData(menuData) {
  return {
    type: MENU_CHANGE_CREATE_MENU_DATA,
    payload: menuData
  };
}


export function changeUpdateMenuRoleData(menuData) {
  return {
    type: MENU_CHANGE_UPDATE_MENU_ROLE_DATA,
    payload: menuData
  };
}

export function loadUpdateDataMenuItem(menuData) {
  return {
    type: MENU_LOAD_UPDATE_MENU_ITEM,
    payload: menuData
  };
}

export function loadUpdateDataMenuRole(menuData) {
  return {
    type: MENU_LOAD_UPDATE_MENU_ROLE,
    payload: menuData
  };
}

export function openModalCreateMenuItem() {
  return {
    type: MENU_OPEN_CREATE_MENU_ITEM_MODAL,
    payload: true
  };
}

export function closeModalCreateMenuItem(flag) {
  return {
    type: MENU_CLOSE_CREATE_MENU_ITEM_MODAL,
    payload: false
  };
}

export function openModalUpdateMenuItem(flag) {
  return {
    type: MENU_OPEN_UPDATE_MENU_ITEM_MODAL,
    payload: true
  };
}

export function closeModalUpdateMenuItem(flag) {
  return {
    type: MENU_CLOSE_UPDATE_MENU_ITEM_MODAL,
    payload: false
  };
}

export function openModalEditMemberMenuItem(flag) {
  return {
    type: MENU_OPEN_UPDATE_MEMBER_MENU_ITEM_MODAL,
    payload: true
  };
}

export function closeModalEditMemberMenuItem(flag) {
  return {
    type: MENU_CLOSE_UPDATE_MEMBER_MENU_ITEM_MODAL,
    payload: false
  };
}

export function clearCreateMenuData() {
  return {
    type: MENU_CLEAR_CREATE_MENU_DATA
  };
}

export function clearUpdateMenuData() {
  return {
    type: MENU_CLEAR_UPDATE_MENU_DATA
  };
}