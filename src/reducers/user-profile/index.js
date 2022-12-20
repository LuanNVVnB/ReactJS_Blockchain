import { OPEN_MENU, USERPROFILE_UPDATE, USERPROFILE_GET_USER_INFO, USERPROFILE_CLOSE_UPLOAD_AVATAR, USERPROFILE_OPEN_UPLOAD_AVATAR, USERPROFILE_HANDLE_AVATAR_SUCCESS, GET_ACHIEVEMENT_USER_PROFILE } from "../../actions/user-profile";

const initialState = {
    showUploadAvatar: false,
    userInfo: {
        id: '',
        email: '',
        displayName: '',
        picture: '',
        locale: '',
        token: ''
    },
    imageUrl: "",
    useinforUpdate: false,

    achievement: [],

    openMenu: true,
};

export function userProfileReducer(state = initialState, action) {
    switch (action.type) {

        case OPEN_MENU:
            return {
                ...state,
                openMenu: !state.openMenu
            };
        case USERPROFILE_GET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload === undefined ? state.userInfo : action.payload
            };
        case USERPROFILE_OPEN_UPLOAD_AVATAR:
            return {
                ...state,
                showUploadAvatar: action.payload
            };
        case USERPROFILE_CLOSE_UPLOAD_AVATAR:
            return {
                ...state,
                showUploadAvatar: action.payload
            };
        case USERPROFILE_HANDLE_AVATAR_SUCCESS:
            return {
                ...state,
                imageUrl: action.payload
            };

        case USERPROFILE_UPDATE:
            return {
                ...state,
                useinforUpdate: action.payload
            };
        case GET_ACHIEVEMENT_USER_PROFILE:
            return {
                ...state,
                achievement: action.payload
            }
        default: return state;
    }
}

export const getUserInfo = state => state.UserProfile.userInfo;
export const getShowUploadAvatar = state => state.UserProfile.showUploadAvatar;
export const getImageUrl = state => state.UserProfile.imageUrl;
export const getuseUpdate = state => state.UserProfile.useinforUpdate;
export const getAchievement = state => state.UserProfile.achievement;
export const getOpenMenu = state => state.UserProfile.openMenu;



export default userProfileReducer;