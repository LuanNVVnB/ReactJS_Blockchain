import { doRegister } from "./index";
import * as $http from "../../utils/httpProvider";
import * as configUrl from "../../config/configUrl";
import { Notification } from "element-react";
import { province } from "../../utils/province";
export const fnDoRegister = form => {
  return dispatch => {
    let data = {
      fullname: form.fullname,
      phone : form.phone,
      email: form.email,
      username: form.username,
      password: form.password,
      confirm: form.confirm,
      province_id: form.province_id
    };
    $http
      .postData(`${configUrl.API_BASE_URL}/auth/register`, data)
      .then(response => {
        console.log(response);
        dispatch(doRegister(response.data));
        Notification({
          title: "Success",
          message: "Create account success!",
          type: "success"
        })
        setTimeout(
          function() {
              window.location.href = "#/login";
        }.bind(this),2000);
      })
      .catch(error => {
        if (error.response.data.message !== undefined) {
          error.response.data.message.forEach(e =>
            Notification({
              title: e.param,
              message: e.msg,
              type: "error"
            })
          );
        } else {
          alert("Have some error");
          console.log(error);
        }
      });
  };
};

export const fnDoRegisterMetamask = form => {
  return dispatch => {
    if (form.confirm !== form.password) return Notification({
      title: 'Errors',
      message: "password confirm error",
      type: 'error'
    });
    let data = {
      fullname: form.fullname,
      phone: form.phone,
      email: form.email,
      username: form.username,
      password: form.password,
      confirm: form.confirm,
      codeMetaMask: form.codeMetaMask,
      province_id: province.find(item => item.Slug === form.province_id)
    };
    $http
      .postData(`${configUrl.API_META_MASK_URL}/register/`, data)
      .then(response => {
        if (response.data.code === 'Success') {
          dispatch(doRegister(response.data));
          Notification({
            title: 'Successfull',
            message: "Successfull",
            type: 'success'
          });
          setTimeout(
            function () {
              window.location.href = "#/login";
            }.bind(this), 2000);
        }
        else {
          Notification({
            title: 'Errors',
            message: "update fail",
            type: 'error'
          });
        }
        
        
      })
      .catch(error => {
        if (error.response.data.message !== undefined) {
          Notification({
            title: 'Errors',
            message: "Register errors",
            type: 'error'
          });
          // error.response.data.message.forEach(e =>
          //   Notification({
          //     title: e.param,
          //     message: e.msg,
          //     type: "error"
          //   })
          // );
        } else {
          alert("Have some error");
          console.log(error);
        }
      });
  };
};
