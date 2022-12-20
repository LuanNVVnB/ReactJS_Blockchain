import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as logoutActions from '../../actions/logout/logoutActions'
import { smoothlyMenu } from '../../assets/theme/Helpers';
import $ from 'jquery';
import '../layout/theme.css';
import "./index.css"
import i18n from '../translation/i18n';
import { Trans, withTranslation } from 'react-i18next';

import ImgaeVn from "../../assets/theme/img/vn.png";
import ImgaeEn from "../../assets/theme/img/en.png";

class Translate extends React.Component {

    componentDidMount() {
        if (!localStorage.getItem('language')) localStorage.setItem("language", "en");
    }
    toggleNavigation = function () {
        console.log("toggleNavigation");
        $("body").toggleClass("mini-navbar");
        smoothlyMenu();
    };
    changeLanguageEn = function () {
        localStorage.setItem("language", "en");
        i18n.changeLanguage("en");
    }
    changeLanguageVn = function () {
        localStorage.setItem("language", "vi");
        i18n.changeLanguage("vi");
    }
    render() {
        return (
            <>
                <div className='topnav'>

                    <div className='topnav__right-item'>
                        <div data-toggle="dropdown" href="#">
                          <i class="fa fa-language" aria-hidden="true" style={{fontSize: "32px" }}></i>
                        </div>
                        <ul className="dropdown-menu fadeInRight language">
                            <li onClick={(e) => this.changeLanguageEn(e)}>
                                <img src={ImgaeEn} />English
                            </li>
                            <li className="dropdown-divider"></li>
                            <li onClick={(e) => this.changeLanguageVn(e)}>
                                <img src={ImgaeVn} />Việt Nam
                            </li>
                        </ul>


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
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(Translate))