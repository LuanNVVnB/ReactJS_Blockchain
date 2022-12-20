import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userProfileActions from '../../actions/user-profile/userProfileActions';
import { getUserInfo, getImageUrl, getShowUploadAvatar, getAchievement } from '../../reducers/user-profile';
import UserInfo from './UserInfo';
import UploadAvatar from "./UploadAvatar";
import { Trans, withTranslation } from 'react-i18next';

class UserProfile extends Component {

    componentDidMount() {
        const { fnGetAchievement } = this.props;
        // fnGetUserInfo();
        fnGetAchievement();
    }

    render() {
        const { userInfo, fnUploadAvatar, showUploadAvatar, fnOpenUploadAvatar, fnCloseUploadAvatar, handleAvatarSuccess, beforeAvatarUpload, imageUrl, achievement } = this.props;
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading" id="setting">
                    <div className="col-lg-12">
                        <h2><Trans i18nKey='Profile.profile-link' /></h2>
                        <ol id="setting" className="breadcrumb">
                            <li id="setting" className="breadcrumb-item">
                                <span><Trans i18nKey='content.menu-herder-link-user' /></span>
                            </li>
                            <li id="setting" className="breadcrumb-item">
                                <span><Trans i18nKey='Profile.profile-link' /></span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="wrapper wrapper-content animated">
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title"><Trans i18nKey='Profile.profile-link' /></h4>
                                    <UserInfo achievement={achievement} userInfo={userInfo} fnOpenUploadAvatar={fnOpenUploadAvatar} />
                                    <UploadAvatar showUploadAvatar={showUploadAvatar} fnCloseUploadAvatar={fnCloseUploadAvatar} fnUploadAvatar={fnUploadAvatar} handleAvatarSuccess={handleAvatarSuccess} beforeAvatarUpload={beforeAvatarUpload} imageUrl={imageUrl} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userInfo: getUserInfo(state),
    showUploadAvatar: getShowUploadAvatar(state),
    imageUrl: getImageUrl(state),
    achievement: getAchievement(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fnGetUserInfo: userProfileActions.fnGetUserInfo,
    fnOpenUploadAvatar: userProfileActions.fnOpenUploadAvatar,
    fnCloseUploadAvatar: userProfileActions.fnCloseUploadAvatar,
    handleAvatarSuccess: userProfileActions.fnHandleAvatarSuccess,
    beforeAvatarUpload: userProfileActions.fnBeforeAvatarUpload,
    fnGetAchievement: userProfileActions.fnGetAchievement
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(UserProfile))