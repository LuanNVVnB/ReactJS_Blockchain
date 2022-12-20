import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as logoutActions from '../../actions/logout/logoutActions'
import { smoothlyMenu } from '../../assets/theme/Helpers';
import $ from 'jquery';
import Theme from './Theme';
import "./NavigationBar.css";
import i18n from '../translation/i18n';
import { Trans, withTranslation } from "react-i18next";
import AvatarSmall from './AvatarSmall';
import * as userProfileActions from '../../actions/user-profile/userProfileActions';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openProfile: false,
        };
         this.toggleNavigation = this.toggleNavigation.bind(this);
    }

    toggleNavigation = function () {
        this.setState({ openProfile: !this.state.openProfile });
        console.log("toggleNavigation");
        $("body").toggleClass("mini-navbar");
        smoothlyMenu();
        this.props.fnOpenMenu();
    };
    handleSetDark() {
        localStorage.setItem("mode", "light")
    }

    render() {
       
        return (
            <>

                <div className='topnav'>

                    <div className="left-sidebar">
                        <i className="fa fa-arrow-left fa fa-bars" onClick={this.toggleNavigation} href="javascript:void(0)"></i>
                    </div>
                    <div className="topnav__right">
                        {this.state.openProfile ?  <div className="topnav__right-item">
                            <AvatarSmall/>
                        </div>:<></>}
                       
                        <div className="topnav__right-item">
                            <a className="admin-external-link" href="#/client" target="_blank" data-v-339183f2="" onClick={() => { this.handleSetDark() }}>
                                <i class="fa fa-home" aria-hidden="true"></i>
                                {/* <span className="admin-dashboard-link-text" data-v-339183f2="">&nbsp;<Trans i18nKey={'Dashboard.instructor'} /></span> */}
                            </a>

                        </div>
                        <div className="topnav__right-item">
                            <Theme />
                        </div>

                        <div className="topnav__right-item">
                            <i className="fa fa-sign-out" onClick={() => this.props.fnDoLogout()}></i>
                        </div>

                    </div>
                </div>

            </>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
    fnDoLogout: logoutActions.fnDoLogout,
    fnOpenMenu:userProfileActions.fnOpenMenu,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(NavigationBar))