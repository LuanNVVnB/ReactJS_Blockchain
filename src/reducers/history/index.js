import {
  GET_ALL_HISTORY,
  GET_HISTORY,
  HISTORY_SET_FILTER,
  HISTORY_SET_PAGE_SIZE,
  HISTORY_SET_TOTAL,
  HISTORY_SET_CURRENT_PAGE
} from "../../actions/history";

const initalState = {
  histories: [],
  history: null,
  paging: {
    pageSize: 10,
    total: 1,
    currentPage: 1
  },
  filter: "",
  currentPage: ""
};

export function historyReducer(state = initalState, action) {
  switch (action.type) {
    case GET_ALL_HISTORY:
      return {
        ...state,
        histories: action.payload
      };
    case GET_HISTORY:
      return {
        ...state,
        history: action.payload
      };
    case HISTORY_SET_CURRENT_PAGE:
      return {
        ...state,
        paging: Object.assign({}, state.paging, { currentPage: action.payload })
      };
    case HISTORY_SET_TOTAL:
      return {
        ...state,
        paging: Object.assign({}, state.paging, { total: action.payload })
      };
    case HISTORY_SET_PAGE_SIZE:
      return {
        ...state,
        paging: Object.assign({}, state.paging, { pageSize: action.payload })
      };
    case HISTORY_SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
}

export const getAllHistory = state => state.History.histories;
export const getHistory = state => state.History.history;
export const getPaging = state => state.History.paging;
export const getCurrentPage = state => state.History.currentPage;
export const getFilter = state => state.History.filter;
export default historyReducer;
