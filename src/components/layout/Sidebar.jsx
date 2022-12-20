import "./siderbar.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as logoutActions from "../../actions/logout/logoutActions";
import * as userProfileActions from '../../actions/user-profile/userProfileActions';
import * as menumangementAction from "../../actions/menu-management/menuManagementAction";
import { getUserInfo,getOpenMenu } from '../../reducers/user-profile';
import { getMenuData } from "../../reducers/menu-management";
import defaultAvatar from "../../assets/theme/img/default-avatar.png"
import { Trans, withTranslation } from "react-i18next";
import AvatarProfile from "./AvatarProfile";
require("metismenu");

class Sidebar extends Component {

  componentDidMount() {
    $("#side-menu").metisMenu();
  }

  componentDidUpdate() {
    $('#side-menu').metisMenu('dispose');
    $('#side-menu').metisMenu();
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  secondLevelActive(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  }

  render() {
    const { userInfo, menuData,openMenu } = this.props;

    const currentRole = userInfo.role;
    let menuLv1 = [];
    let menuLv2 = [];
    let menuLv3 = [];
    if (menuData !== undefined && menuData !== [] && menuData !== '[]' && menuData.length > 0) {
      menuData.map(x => {
        if (x.level === 1) {
          menuLv1.push(x);
        } else if (x.level === 2) {
          menuLv2.push(x);
        } else {
          menuLv3.push(x);
        }
      })

    }

    let checkCurrentRole = arr => {
      let roleData = [];
      arr.map(a => {
        roleData.push(a.roleCode);
      })
      if (currentRole !== undefined && currentRole !== null) {
        return roleData.some(r => currentRole.includes(r));
      } else {
        return false;
      }
    }

    return (

      <div>
        <nav className="navbar-default navbar-static-side" role="navigation">
          <div className="sidebar-collapse">
            <ul className="nav metismenu" id="side-menu" ref="menu">
              <li className="nav-header">
                {/* <div className="dropdown profile-element">
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
                      <a href="#logout" onClick={() => this.props.fnDoLogout()}>
                        <span><Trans i18nKey={'Profile.logout'} /></span>
                      </a>
                    </li>
                  </ul>
                </div> */}{
                  openMenu ?  <AvatarProfile/>:
                <div className="logo-element">MyVote</div>
                }
               
              </li>
              <li className={this.activeRoute("/dashboard")}>
                <Link className="nav-link" to="/dashboard">
                  <i className="fa fa-th-large"></i>
                  <span className="menu-title"><Trans i18nKey={'Dashboard.Statistical'} /></span>
                </Link>
              </li>
              {menuLv1 === [] ? '' : menuLv1.map((x, index) => {
                if (x.enable && checkCurrentRole(x.menuRoles)) {
                  let checkArrow = false;
                  return (
                    <li key={index} className={this.activeRoute("/" + x.url)}>
                      <Link className="nav-link" to={x.url ? x.url : '#'}>
                        {x.imageIcon ? <img className="icon-image-view" src={x.imageIcon} /> : <i className={x.icon}></i>}
                        <span className="nav-label">{localStorage.getItem("language") === 'en' ? x.name : <Trans i18nKey={`MenuBar.${x.name}`} />}</span>
                        {menuLv2 === [] ? '' : menuLv2.map((y, index) => {
                          if (y.parentId === x.id && y.enable && checkCurrentRole(y.menuRoles)) {
                            checkArrow = true;
                          }
                        })}
                        {checkArrow ? <span className="fa arrow"></span> : ''}
                      </Link>
                      {menuLv2 === [] ? '' : menuLv2.map((y, index) => {
                        if (y.parentId === x.id && y.enable && checkCurrentRole(y.menuRoles)) {
                          let checkArrow = false;
                          return (
                            <ul className='nav nav-second-level collapse' key={index}>
                              <li className={this.activeRoute("/" + y.url)}>
                                <Link className="nav-link" to={y.url ? y.url : '#'}>
                                  {y.imageIcon ? <img className="icon-image-view" src={y.imageIcon} /> : <i className={y.icon}></i>}
                                  <span className="nav-label">{localStorage.getItem("language") === 'en' ? y.name : <Trans i18nKey={`MenuBar.${y.name}`} />}</span>
                                  {menuLv3 === [] ? '' : menuLv3.map((z, index) => {
                                    if (z.parentId === y.id && z.enable && checkCurrentRole(z.menuRoles)) {
                                      checkArrow = true;
                                    }
                                  })}

                                  {checkArrow ? <span className="fa arrow"></span> : ''}
                                </Link>
                                {menuLv3 === [] ? '' : menuLv3.map((z, index) => {
                                  if (z.parentId === y.id && z.enable && checkCurrentRole(z.menuRoles)) {
                                    return <ul className='nav nav-third-level collapse' key={index}>
                                      <li className={this.activeRoute("/" + z.url)}>
                                        <Link className="nav-link" to={z.url ? z.url : '#'}>
                                          {z.imageIcon ? <img className="icon-image-view" src={z.imageIcon} /> : <i className={z.icon}></i>}
                                          <span className="nav-label">{z.name}</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  }
                                })}
                              </li>
                            </ul>
                          )
                        }
                      })}
                    </li>
                  )
                }
              })
              }
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: getUserInfo(state),
  menuData: getMenuData(state),
  openMenu: getOpenMenu(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fnDoLogout: logoutActions.fnDoLogout,
  fnGetUserInfo: userProfileActions.fnGetUserInfo,
  fnGetMenuData: menumangementAction.fnGetAllMenuData,
},
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Sidebar));
