import { getUserInfo, updateUserInfor, closeUploadAvatar, openUploadAvatar, handleAvatarSuccess, setAchievementData, OpenMenu } from "./index";
import * as CONFIG from "../../config/configUrl";
import * as $http from "../../utils/httpProvider";
import { Notification } from "element-react";
import * as TokenUtils from "../../utils/tokenUtils";

export const fnGetUserInfo = () => {
  return dispatch => {
    $http.getData(CONFIG.API_BASE_URL + `/user-profile`).then(res => {
      dispatch(getUserInfo(res.data.data === undefined ? undefined : res.data.data));
      return res;
    })
      .catch(error => {
        throw error;
      });
  };
};
export const fnOpenMenu = () => {
  return dispatch => {
    dispatch(OpenMenu());
  };
};


export const fnCloseUploadAvatar = () => {
  return dispatch => {
    dispatch(closeUploadAvatar(false));
  }
};

export const fnOpenUploadAvatar = () => {
  return dispatch => {
    dispatch(openUploadAvatar(true));
  }
};

export const fnHandleAvatarSuccess = (res, file) => {
  return dispatch => {
    let data = URL.createObjectURL(file.raw);
    dispatch(handleAvatarSuccess(data));
    dispatch(fnGetUserInfo());
  }
};

export const fnBeforeAvatarUpload = (fileType, fileSize) => {
  return dispatch => {
    const isJPG = fileType === 'image/jpeg' || fileType === 'image/png' || fileType === 'image/jpg';
    const isLt2M = fileSize / 1024 / 1024 < 5;

    if (!isJPG) {
      Notification({
        title: 'Error',
        message: 'Avatar picture must be JPG, PNG format!',
        type: 'error'
      });
    }
    if (!isLt2M) {
      Notification({
        title: 'Error',
        message: 'Avatar picture size can not exceed 5MB!',
        type: 'error'
      });
    }
    return isJPG && isLt2M;
  }
};
export const fnUpdateProfile = (data) => {
  return (dispatch) => {
    const valid = validate(data.password);
    const validName = validateName(data.fullname);
    const validPhone = validatePhone(data.phone);
    if (!valid || !validName || !validPhone) {
      return;
    }
    else {
      $http
        .putData(CONFIG.API_BASE_URL + '/rest/update_profile', { data })
        .then(response => {
          if (response.data.code == "Success") {
            TokenUtils.setToken(JSON.stringify(response.data.token));
            dispatch(fnGetUserInfo());
            Notification({
              title: 'Success',
              message: response.data.message,
              type: 'success'
            })
            dispatch(updateUserInfor(true));
            return true;
          } else {
            Notification({
              title: 'Errors',
              message: "code error",
              type: 'error'
            })
            return false;
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

export const validateName = (data) => {
  let result = true;
  if (!data.match(/^[/s/wÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ\s\w|_]*$/)) {
    result = false;
    Notification({
      title: 'Errors',
      message: '4 or more ASCII letters, including uppercase,  0 to 2 occurrences of a space followed with one or more ASCII letters',
      type: 'error'
    })
  }
  return result;
}

export const validatePhone = (data) => {
  let result = true;
  if (data.length != 10 && data.length != 11) {
    Notification({
      title: 'Errors',
      message: 'Please enter a valid phone number 10 or 11 characters.',
      type: 'error'
    })
    result = false;
  } else {
    if (!data.match(/\(?\b[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}\b/)) {
      result = false;
      Notification({
        title: 'Errors',
        message: 'Please enter a valid phone number 10 or 11 characters number',
        type: 'error'
      })
    }

  }
  return result;
}


// Achievement

export const fnGetAchievement = () => {
  return dispatch => {
    $http.getData(CONFIG.API_BASE_URL + "/v1/rest/achievement/reward").then(response => {
      dispatch(setAchievementData(response.data));
    }).catch(error => {
      throw error;
    });
  };
}




