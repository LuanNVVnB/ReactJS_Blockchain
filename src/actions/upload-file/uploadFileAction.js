import { MessageBox, Notification } from "element-react";
import * as CONFIG from "../../config/configUrl";
import * as $http from "../../utils/httpProvider";
import {
  filterFileByFileName,
  setCurrentPage,
  setTotal,
  setPageSize,
  setFilter,
  getFileById
} from "./index";
import { createHistory } from "../history";
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
    dispatch(fnFilterFileByFileName(filter, 0, paging.pageSize));
  };
};

export const fnChangePageSize = (pageSize, paging, filter) => {
  return dispatch => {
    dispatch(setCurrentPage(0));
    dispatch(setPageSize(pageSize));
    dispatch(fnFilterFileByFileName(filter, 0, pageSize));
  };
};

export const fnChangeCurrentPage = (currentPage, paging, filter) => {
  return dispatch => {
    dispatch(setCurrentPage(currentPage));
    dispatch(fnFilterFileByFileName(filter, currentPage - 1, paging.pageSize));
  };
};

export const fnSetFilter = filter => {
  return dispatch => dispatch(setFilter(filter));
};

export const fnFilterFileByFileName = (filename, startAt, pageSize) => {
  var us = filename ? filename : "";
  var sa = startAt ? startAt : 0;
  var ps = pageSize ? pageSize : 10;
  return dispatch => {
    console.log("call get data");
    $http
      .getData(
        CONFIG.API_BASE_URL +
        "/rest/file/search?startAt=" +
        sa +
        "&maxResults=" +
        ps +
        "&filename=" +
        us
      )
      .then(response => {
        dispatch(filterFileByFileName(response.data));
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
    dispatch(fnSetTotal());
  };
};

export const fnSetTotal = () => {
  return dispatch => {
    $http
      .getData(CONFIG.API_BASE_URL + "/rest/file/count")
      .then(response => {
        dispatch(setTotal(response.data.data));
        return response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fnGetFileById = id => {
  return dispatch => {
    $http
      .getData(CONFIG.API_BASE_URL + "/rest/file/get-file/" + id)
      .then(response => {
        dispatch(getFileById(response.data));
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fnDeleteFile = (id, paging) => {
  console.log("Call fnRemoveFile", id);
  return dispatch => {
    MessageBox.confirm("This will delete file. Continue?", "Warning", {
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      type: "warning"
    })
      .then(() => {
        $http
          .deleteData(CONFIG.API_BASE_URL + "/rest/file/delete-file/" + id)
          .then(response => {
            if (
              paging.total - 1 ===
              paging.currentPage * paging.pageSize - paging.pageSize
            ) {
              dispatch(setCurrentPage(paging.currentPage - 1));
              dispatch(
                fnFilterFileByFileName(
                  "",
                  paging.currentPage - 2 < 0 ? 0 : paging.currentPage - 2,
                  paging.pageSize
                )
              );
            } else {
              dispatch(setCurrentPage(paging.currentPage));
              dispatch(
                fnFilterFileByFileName(
                  "",
                  paging.currentPage - 1 < 0 ? 0 : paging.currentPage - 1,
                  paging.pageSize
                )
              );
            }
            Notification({
              title: "Success",
              message: "Remove file success",
              type: "success"
            });
          })
          .catch(e => {
            console.log(e);
          });
      })
      .catch(() => {
        Notification({
          title: "Info",
          message: "Remove canceled",
          type: "info"
        });
      });
  };
};

export const handleError = (err, file, fileList) => {
  return dispatch => {
    console.log(err, file, fileList);
    Notification.error({
      title: "Error",
      message: "Upload file fail !"
    });
  };
};
export const handleSuccess = paging => {
  return dispatch => {
    dispatch(
      createHistory(
        {
          objectId: 2,
          category: "UPLOAD FILE",
          action: "UPLOAD",
          content: `Upload new file success ${new Date(Date.now()).toLocaleString()}`,
          username: "admin"
        },
        { objectChildName: "value", oldValue: "", newValue: "text" }
      )
    );
    dispatch(setCurrentPage(paging.currentPage));
    dispatch(
      fnFilterFileByFileName(
        "",
        paging.currentPage > 0 ? paging.currentPage - 1 : paging.currentPage,
        paging.pageSize
      )
    );
    Notification({
      title: "Success",
      message: "Upload File success",
      type: "success"
    });
  };
};
