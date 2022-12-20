import { Notification } from "element-react";
import * as $http from "../../utils/httpProvider";
import * as configUrl from "../../config/configUrl";
import {userForgot,statusForgotPasword} from "./index";
export const fnDoForgot = (email) => {
  return dispatch => {
   
    $http
      .postData(`${configUrl.API_BASE_URL}/rest/forgot-password`,{"email":email})
      .then(response => {
        if(response.data.code == "Error")
        {
          Notification({
            title: 'Errors',
            message: response.data.message,
            type: 'error'
          })
        }else{
          dispatch(statusForgotPasword(1));
          dispatch(userForgot(response.data));
        }
       
       
      })
      .catch(err => {
        Notification({
          title: 'Errors',
          message:"error catch",
          type: 'error'
        })
      })
  };
};

