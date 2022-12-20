import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as userProfileActions from '../../actions/user-profile/userProfileActions';
import * as logoutActions from "../../actions/logout/logoutActions";
import { Trans, withTranslation } from "react-i18next";
import { useEffect } from 'react';
import defaultAvatar from "../../assets/theme/img/default-avatar.png"
import { Link } from "react-router-dom";

function AvatarProfile() {
    const userInfo = useSelector(state => state.UserProfile.userInfo);
    // Dispatch
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userProfileActions.fnGetUserInfo())
    }, [dispatch])
    console.log("user profile", userInfo);

    const fnDoLogout = () => {
        dispatch(logoutActions.fnDoLogout());
    }

    return (

        <div className="dropdown profile-element">
            <img
                alt="avt-img"
                className="rounded-circle avatar-img"
                src={userInfo.photo === undefined ? defaultAvatar : userInfo.photo} />
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <span className="block m-t-xs font-bold">{userInfo.name === undefined ? '' : userInfo.name}</span>
                <span className="text-muted text-xs block">
                    <Trans i18nKey={'Profile.more'} />
                    <b className="caret"></b>
                </span>
            </a>
            <ul className="dropdown-menu fadeInRight m-t-xs">
                <li>
                    <Link to="/user-profile">
                        <span><Trans i18nKey={'Profile.profile'} /></span>
                    </Link>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                    <a href="#logout" onClick={() => fnDoLogout()}>
                        <span><Trans i18nKey={'Profile.logout'} /></span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AvatarProfile