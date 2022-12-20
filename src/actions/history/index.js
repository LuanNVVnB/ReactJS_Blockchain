import * as CONFIG from "../../config/configUrl";
import * as $http from "../../utils/httpProvider";
import { Notification } from "element-react";

export const GET_ALL_HISTORY = "GET_ALL_HISTORY";
export const GET_HISTORY = "GET_HISTORY";
export const HISTORY_SET_FILTER = "HISTORY_SET_FILTER";
export const HISTORY_SET_PAGE_SIZE = "HISTORY_SET_PAGE_SIZE";
export const HISTORY_SET_TOTAL = "HISTORY_SET_TOTAL";
export const HISTORY_SET_CURRENT_PAGE = "HISTORY_SET_CURRENT_PAGE";
// Start Pageable
export function setCurrentPage(page) {
  return {
    type: HISTORY_SET_CURRENT_PAGE,
    payload: page
  };
}

export function setTotal(total) {
  return {
    type: HISTORY_SET_TOTAL,
    payload: total
  };
}

export function setPageSize(size) {
  return {
    type: HISTORY_SET_PAGE_SIZE,
    payload: size
  };
}

export function setFilter(filter) {
  return {
    type: HISTORY_SET_FILTER,
    payload: filter
  };
}
export const fnResetFilter = () => {
  return dispatch => {
    dispatch(setCurrentPage(0));
    dispatch(setPageSize(10));
    dispatch(setFilter(""));
  };
};

export const fnSearch = (filter, paging) => {
  return dispatch => {
    dispatch(setCurrentPage(0));
    dispatch(setPageSize(10));
    dispatch(fetchAllHistory(filter, 0, paging.pageSize));
  };
};

export const fnChangePageSize = (pageSize, paging, filter) => {
  return dispatch => {
    dispatch(setCurrentPage(0));
    dispatch(setPageSize(pageSize));
    dispatch(fetchAllHistory(filter, 0, pageSize));
  };
};

export const fnChangeCurrentPage = (currentPage, paging, filter) => {
  return dispatch => {
    dispatch(setCurrentPage(currentPage));
    dispatch(fetchAllHistory(filter, currentPage - 1, paging.pageSize));
  };
};

export const fnSetFilter = filter => {
  return dispatch => dispatch(setFilter(filter));
};
// End Pageable
export const getAllHistory = data => ({
  type: GET_ALL_HISTORY,
  payload: data
});

export const fetchAllHistory = (category, startAt, pageSize) => {
  return dispatch => {
    var us = category ? category : "";
    var sa = startAt ? startAt : 0;
    var ps = pageSize ? pageSize : 10;
    $http
      .getData(
        CONFIG.API_BASE_URL +
          "/rest/history/search?startAt=" +
          sa +
          "&maxResults=" +
          ps +
          "&category=" +
          us
      )
      .then(res => dispatch(getAllHistory(res.data)));
      dispatch(fnSetTotal());
    };
};

export const getHistoryValue = data => ({
  type: GET_HISTORY,
  payload: data
});

export const fetchHistoryValue = id => {
  return dispatch => {
    $http
      .getData(CONFIG.API_BASE_URL + `/rest/history-value?historyId=${id}`)
      .then(res => dispatch(getHistoryValue(res.data)));
    };
};
export const fnSetTotal = () => {
  return dispatch => {
    $http
      .getData(CONFIG.API_BASE_URL + "/rest/history/search")
      .then(response => {
        console.log(response.data)
        dispatch(setTotal(response.data.length));
        return response.data.length;
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const createHistory = (data, value) => {
  return dispatch => {
    $http
      .postData(CONFIG.API_BASE_URL + `/rest/history`, data)
      .then(res => {
        dispatch(fetchAllHistory());
        if (value) {
          dispatch(createHistoryValue({ ...value, historyId: res.data.id }));
        }
        // Notification({
        //   title: 'Success',
        //   message: 'Create history success',
        //   type: 'success'
        // })
      })
      .catch(err =>
        err.response.data.errors.forEach(e =>
          Notification({
            title: "Errors",
            message: Object.values(e),
            type: "error"
          })
        )
      );
  };
};

export const createHistoryValue = data => {
  return dispatch => {
    $http
      .postData(CONFIG.API_BASE_URL + `/rest/history-value`, data)
      .then(res => {
        // Notification({
        //   title: 'Success',
        //   message: 'Create history value success',
        //   type: 'success',
        // })
      })
      .catch(err =>
        err.response.data.errors.forEach(e =>
          Notification({
            title: "Errors",
            message: Object.values(e),
            type: "error"
          })
        )
      );
  };
};

export const deleteHistoryValue = id => {
  return dispatch => {
    $http
      .deleteData(CONFIG.API_BASE_URL + `/rest/history-value?id=${id}`)
      .then(res =>
        Notification({
          title: "Success",
          message: "Delete history value success",
          type: "success"
        })
      )
      .catch(err =>
        err.response.data.errors.forEach(e =>
          Notification({
            title: "Errors",
            message: Object.values(e),
            type: "error"
          })
        )
      );
  };
};
