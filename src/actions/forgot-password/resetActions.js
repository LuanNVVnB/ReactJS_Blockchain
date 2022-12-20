
import * as $http from "../../utils/httpProvider";
import * as configUrl from "../../config/configUrl";
import * as TokenUtils from "../../utils/tokenUtils";
import { Notification } from "element-react";
import {doResetPassword, changeInput, changeAuthPassword }from "./index";
export const fnDoReset =( authCode) => {
  return dispatch => {
    $http
      .postData(`${configUrl.API_BASE_URL}/rest/varify`,{"authCode": authCode})
      .then(response => {
        if(response.data.isAuth == true){
          dispatch(doResetPassword(response.data.isAuth));

        }else{
          Notification({
            title: 'Errors',
            message: "code error",
            type: 'error'
          })
        }
        
      })
      .catch(error => {
        if (error.response.data.message !== undefined) {
          Notification({
            title: 'Errors',
            message: error.response.data.message,
            type: 'error'
          })
        } else {
          alert(error);
        }
      });
      
  };
};


export const fnChangeInput = (action) =>{
  return dispatch => {
    dispatch(changeInput(action))
  }
}

export const fnDoUpdatePass =( user) => {

  return dispatch => {
    const valid = validate(user.passwordReset);
    if(!valid){
      return;
    }else{
      $http
      .postData(`${configUrl.API_BASE_URL}/rest/reset-password`,{user})
      .then(response => {
        if (response.data.data !== undefined) {
          TokenUtils.setToken(JSON.stringify(response.data.data));
          if(response.data.code =="Success"){
            Notification({
              title: 'Success',
              message: "your password is updated",
              type: 'success'
            })
            setTimeout(() => {
              window.location.href = "/#/login";

            }, 2000);
           
          }else{
            Notification({
              title: 'Errors',
              message: "email or password not null" ,
              type: 'error'
            })

          }
        }
       
      })
      .catch(error => {
        if (error.response.data.message !== undefined) {
          Notification({
            title: 'Errors',
            message: error.response.data.message,
            type: 'error'
          })
        } else {
          alert(error);
        }
      });

    }
    
      
  };
};


export const fnChangeAuthPass = (value) =>{
  return dispatch => {
    dispatch(changeAuthPassword(value));
  }
}


export const validate = (data) => {
  let result = true;
  if (!data.match(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})$/)) {
      result = false;
      Notification({
          title: 'Errors',
          message: 'Passwords must contain at least eight characters, including uppercase, lowercase, special character letters and numbers',
          type: 'error'
      })
  }
  return result;
}
