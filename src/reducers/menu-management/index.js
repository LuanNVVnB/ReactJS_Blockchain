import {
  MENU_GET_ALL_MENU_DATA,
  MENU_OPEN_CREATE_MENU_ITEM_MODAL,
  MENU_CLOSE_CREATE_MENU_ITEM_MODAL,
  MENU_OPEN_UPDATE_MENU_ITEM_MODAL,
  MENU_CLOSE_UPDATE_MENU_ITEM_MODAL,
  MENU_OPEN_UPDATE_MEMBER_MENU_ITEM_MODAL,
  MENU_CLOSE_UPDATE_MEMBER_MENU_ITEM_MODAL,
  MENU_LOAD_UPDATE_MENU_ITEM,
  MENU_CHANGE_UPDATE_MENU_ROLE_DATA,
  MENU_CHANGE_UPDATE_MENU_DATA,
  MENU_LOAD_UPDATE_MENU_ROLE,
  MENU_CHANGE_CREATE_MENU_DATA,
  MENU_CLEAR_CREATE_MENU_DATA
} from "../../actions/menu-management";

const initalState = {
  menuData: [],
  flagCreatMenu: false,
  flagUpdateMenu: false,
  flagEditMemberMenu: false,
  menuItemUpdate: {
    id: "",
    name: "",
    parentId: "",
    enable: false,
    url: "",
    icon: "",
    imageIcon: ""
  },
  menuItemCreate: {
    name: "",
    parentId: "",
    enable: true,
    url: "",
    icon: "",
    imageIcon: ""
  },
  menuRoleUpdate: {
    menuId: "",
    roleCodes: []
  }
};

export function menuManagementReducer(state = initalState, action) {
  switch (action.type) {
    // SET MENU DATA
    case MENU_GET_ALL_MENU_DATA:
      return {
        ...state,
        menuData: action.payload
      };

    case MENU_OPEN_CREATE_MENU_ITEM_MODAL:
      return {
        ...state,
        flagCreatMenu: true
      };

    case MENU_CLOSE_CREATE_MENU_ITEM_MODAL:
      return {
        ...state,
        flagCreatMenu: false,
        menuItemCreate: {
          name: "",
          parentId: "",
          enable: true,
          url: "",
          icon: "",
          imageIcon: ""
        }
      };

    case MENU_OPEN_UPDATE_MENU_ITEM_MODAL:
      return {
        ...state,
        flagUpdateMenu: true
      };

    case MENU_CLOSE_UPDATE_MENU_ITEM_MODAL:
      return {
        ...state,
        flagUpdateMenu: false
      };

    case MENU_OPEN_UPDATE_MEMBER_MENU_ITEM_MODAL:
      return {
        ...state,
        flagEditMemberMenu: true
      };

    case MENU_CLOSE_UPDATE_MEMBER_MENU_ITEM_MODAL:
      return {
        ...state,
        flagEditMemberMenu: false
      };

    case MENU_LOAD_UPDATE_MENU_ITEM:
      return {
        ...state,
        menuItemUpdate: action.payload
      };

    case MENU_LOAD_UPDATE_MENU_ROLE:
      return {
        ...state,
        menuRoleUpdate: action.payload
      };

    case MENU_CHANGE_CREATE_MENU_DATA:
      return {
        ...state,
        menuItemCreate: Object.assign({}, state.menuItemCreate, {
          [action.payload.key]: action.payload.value
        })
      };

    case MENU_CLEAR_CREATE_MENU_DATA:
      return {
        ...state,
        menuItemCreate: {
          name: "",
          parentId: "",
          enable: true,
          url: "",
          icon: "",
          imageIcon: ""
        }
      };

    case MENU_CHANGE_UPDATE_MENU_DATA:
      return {
        ...state,
        menuItemUpdate: Object.assign({}, state.menuItemUpdate, {
          [action.payload.key]: action.payload.value
        })
      };

    case MENU_CHANGE_UPDATE_MENU_ROLE_DATA:
      return {
        ...state,
        menuRoleUpdate: Object.assign({}, state.menuRoleUpdate, {
          [action.payload.key]: action.payload.value
        })
      };

    // DEFAULT
    default:
      return state;
  }
}

export const getFlagCreatMenu = state => state.MenuManagement.flagCreatMenu;
export const getFlagUpdateMenu = state => state.MenuManagement.flagUpdateMenu;
export const getFlagEditMemberMenu = state =>
  state.MenuManagement.flagEditMemberMenu;
export const getMenuData = state => state.MenuManagement.menuData;
export const getMenuItemNeedEdit = state => state.MenuManagement.menuItemUpdate;
export const getMenuItemCreate = state => state.MenuManagement.menuItemCreate;
export const getMenuRoleUpdate = state => state.MenuManagement.menuRoleUpdate;

export default menuManagementReducer;
