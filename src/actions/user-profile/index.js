export const USERPROFILE_GET_USER_INFO = 'USERPROFILE_GET_USER_INFO';
export const USERPROFILE_UPLOAD_AVATAR = 'USERPROFILE_UPLOAD_AVATAR';
export const USERPROFILE_CLOSE_UPLOAD_AVATAR = 'USERPROFILE_CLOSE_UPLOAD_AVATAR';
export const USERPROFILE_OPEN_UPLOAD_AVATAR = 'USERPROFILE_OPEN_UPLOAD_AVATAR';
export const USERPROFILE_HANDLE_AVATAR_SUCCESS = 'USERPROFILE_HANDLE_AVATAR_SUCCESS';
export const USERPROFILE_BEFORE_AVATAR_UPLOAD = 'USERPROFILE_BEFORE_AVATAR_UPLOAD';
export const USERPROFILE_UPDATE = 'USERPROFILE_UPDATE';
export const OPEN_MENU = 'OPEN_MENU';

//Achievement
export const GET_ACHIEVEMENT_USER_PROFILE = 'GET_ACHIEVEMENT_USER_PROFILE';

export function getUserInfo(userInfo) {
    return {
        type: USERPROFILE_GET_USER_INFO,
        payload: userInfo
    }
}

export function OpenMenu(){
    return {
        type: OPEN_MENU,
    }
}

export function uploadAvatar(avatar) {
    return {
        type: USERPROFILE_UPLOAD_AVATAR,
        payload: avatar
    }
}

export function closeUploadAvatar(flag) {
    return {
        type: USERPROFILE_CLOSE_UPLOAD_AVATAR,
        payload: flag
    }
}

export function openUploadAvatar(flag) {
    return {
        type: USERPROFILE_OPEN_UPLOAD_AVATAR,
        payload: flag
    }
}

export function handleAvatarSuccess(file) {
    return {
        type: USERPROFILE_HANDLE_AVATAR_SUCCESS,
        payload: file
    }
}

export function beforeAvatarUpload(file) {
    return {
        type: USERPROFILE_BEFORE_AVATAR_UPLOAD,
        payload: file
    }
}

export function updateUserInfor(useinfor) {
    return {
        type: USERPROFILE_UPDATE,
        payload: useinfor
    }
}


export function setAchievementData(data) {
    return {
        type: GET_ACHIEVEMENT_USER_PROFILE,
        payload: data
    }
}

