import { Notification } from "element-react";
import { doLogin } from "./index";
import * as $http from "../../utils/httpProvider";
import * as configUrl from "../../config/configUrl";
import * as TokenUtils from "../../utils/tokenUtils";

export const fnDoLogin = user => {
  return dispatch => {
    console.log(user);
    $http
      .postData(`${configUrl.API_BASE_URL}/auth/login`, {
        username: user.username,
        password: user.password,
      })
      .then(response => {
        console.log("login======",response);
        dispatch(doLogin(response.data));
        if (response.data.data !== undefined) {
          TokenUtils.setToken(JSON.stringify(response.data.data));
        }
        window.location.href = "/";
      })
      .catch(error => {
        if (error.response.data.message !== undefined) {
          Notification({
            title: 'Errors',
            message: error.response.data.message,
            type: 'error'
          })
        } else {
          console.log(error);
          alert(error);
        }
      });
  };
};
export const fnDoLoginMetamask = user => {
  return dispatch => {
    console.log(user);
    $http
      .postData(`${configUrl.API_META_MASK_URL}/login/`, {
        username: user.username,
        password: user.password,
        codeMetaMask: user.codeMetaMask
      })
      .then(response => {
        console.log("login======", response);
        dispatch(doLogin(response.data));
        if (response.data.data !== undefined) {
          TokenUtils.setToken(JSON.stringify(response.data.data));
        }
        window.location.href = "/";
      })
      .catch(error => {
        if (error.response.data.message !== undefined) {
          Notification({
            title: 'Errors',
            message: error.response.data.message,
            type: 'error'
          })
        } else {
          console.log(error);
          alert(error);
        }
      });
  };
};
