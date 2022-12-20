import React from "react";
import { Route, withRouter } from "react-router-dom";
import * as CONFIG from "./config/configUrl";

//CONNECT
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userProfileActions from "./actions/user-profile/userProfileActions";
import * as menumangementAction from "./actions/menu-management/menuManagementAction";
import { getUserInfo } from "./reducers/user-profile";
import { getMenuData } from "./reducers/menu-management";

import NavigationBar from "./components/layout/NavigationBar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer.jsx";

import Dashboard from "./components/dashboard";
import LoginPage from "./components/login";
import LoginSocial from "./components/login-social";
import UserProfile from "./components/user-profile";
import Commentation from "./components/commentation";
import MenuManagement from "./components/menu-management";
import UploadFile from "./components/upload-files";
import History from "./components/history";
import UserManager from "./components/user-manager";
import GroupManager from "./components/group-manager";
import RegisterPage from "./components/register";
import NoPermission from "./components/no-permission";
import Permission from "./components/permission/index";
import Role from "./components/role/index";
import ObjectType from "./components/object-type/index";
import ForgotPasswordPage from "./components/forgot-password/index";
// import ResetPasswordPage from "./components/forgot-password/indexTwo";
import QuizCategory from "./components/quiz-category";
import Quiz from "./components/quiz";
import Play from "./components/play";
import ClassManagement from "./components/class-management";
import ClassDetail from "./components/class-detail";
import Quizlet from "./components/quiz-dashboard-cl";
import DetailQuiz from "./components/quiz-detail/detail-quiz";
import Profile from "./components/quiz-profile-cl/profile-user";
import HistoryQuiz from "./components/quiz-history-cl/history";
import ExportManager from "./components/export-manager";
import ExportDetail from "./components/export-manager-detail";
import UserClass from "./components/user-class";
import Ballot from "./components/Ballot";
import Candidates from "./components/candidate-management";
import Provinces from "./components/province-management";


// IMPORT CSS

import "./assets/css/customs.css";
import "./assets/theme/css/bootstrap.min.css";
// import "./assets/css/app.css";
import "./assets/theme/font-awesome/css/font-awesome.css";
import "./assets/theme/css/animate.css";
import "./assets/theme/css/style.css";
import "./assets/theme/css/plugins/bootstrapSocial/bootstrap-social.css";
import "./assets/css/layout.css";

// JQUERY SETUP
import $ from "jquery";
import AppClient from "./componentClient/AppClient";
import ChartsUser from "./components/apexcharts/apexchartsUser/ChartsUser";
import VotedProposal from "./components/voted-proposal-cl";
import HomeClient from "./components/quiz-home-cl";
import CandidateDetail from "./components/CandidateDetail/CandidateDetail";
import ApexchartBallot from "./components/apexcharts/apexchartsBallot/ApexchartBallot";
import Instruction from "./components/Instructions";



window.jQuery = $;
window.$ = $;
global.jQuery = $;

require("bootstrap");
require("popper.js");
require("perfect-scrollbar");

class App extends React.Component {
  componentDidMount() {
    // GET MENU DATA & USER PROFILE
    const { fnGetUserInfo, fnGetMenuData } = this.props;
    fnGetUserInfo();
    fnGetMenuData();
    console.log("CHECK CM: ", this.checkMenuAccess("commentation"));

    const { pathname } = this.props.location;
    console.log("GO TO PATH: " + pathname);
    if (
      pathname !== "/login" &&
      pathname !== "/register" &&
      pathname !== "/redirect"

      // pathname !== "/redirect/reset-password"
    ) {
      if (
        typeof window.localStorage.getItem(CONFIG.ACCESS_TOKEN) ===
        "undefined" ||
        window.localStorage.getItem(CONFIG.ACCESS_TOKEN) === null
      ) {
        window.location.href = "#/login";
      } else if (pathname === "/" || pathname === "#/") {
        window.location.href = "#/dashboard";
      }

    }
  }

  getValueByKey(data, value) {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element.url === value) {
        return element;
      }
    }
    return null;
  }

  checkMenuAccess(path) {
    console.log("CHECK PATH: ", path)
    let menuData = this.props.menuData;
    let userInfo = this.props.userInfo;
    if (menuData !== undefined && menuData.length > 0 && userInfo.role !== undefined && userInfo.role.length > 0) {
      let menu = this.getValueByKey(menuData, path);
      if (menu !== null) {
        return this.checkCurrentRole(menu.menuRoles, userInfo.role);
      }
    } else {
      return false;
    }
    return false;
  }

  checkCurrentRole(menuRole, currentRole) {
    let roleData = [];
    menuRole.map((mr) => {
      roleData.push(mr.roleCode);
    });
    if (currentRole !== undefined && currentRole !== null) {
      for (let index = 0; index < roleData.length; index++) {
        const element = roleData[index];
        if (currentRole.includes(element)) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }

  render() {
    let wrapperClass = "gray-bg " + this.props.location.pathname;
    return (
      <div id="wrapper">
        <Sidebar location={this.props.location} />
        <div id="page-wrapper" className={wrapperClass}>
          <NavigationBar />
          <div>
            <Route exact path="/dashboard" component={ChartsUser} />
            {/* <Route exact path="/redirect/reset-password" component={ResetPasswordPage} /> */}
            <Route exact path="/forgot-password" component={ForgotPasswordPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/redirect" component={LoginSocial} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/user-profile" component={UserProfile} />
            <Route exact path="/no-permission" component={NoPermission} />
            <Route exact path="/commentation" render={() => (this.checkMenuAccess("commentation") ? <Commentation /> : <NoPermission />)} />
            <Route exact path="/menu-management" render={() => (this.checkMenuAccess("menu-management") ? <MenuManagement /> : <NoPermission />)} />
            <Route exact path="/upload-file" render={() => (this.checkMenuAccess("upload-file") ? <UploadFile /> : <NoPermission />)} />
            <Route exact path="/history" render={() => (this.checkMenuAccess("history") ? <History /> : <NoPermission />)} />
            <Route exact path="/user-manager" render={() => (this.checkMenuAccess("user-manager") ? <UserManager /> : <NoPermission />)} />
            <Route exact path="/group-manager" render={() => (this.checkMenuAccess("group-manager") ? <GroupManager /> : <NoPermission />)} />
            <Route exact path="/permission" render={() => (this.checkMenuAccess("permission") ? <Permission /> : <NoPermission />)} />
            <Route exact path="/role" render={() => (this.checkMenuAccess("role") ? <Role /> : <NoPermission />)} />
            <Route exact path="/object-type" render={() => (this.checkMenuAccess("object-type") ? <ObjectType /> : <NoPermission />)} />
            <Route exact path="/quiz-category" render={() => (this.checkMenuAccess("quiz-category") ? <QuizCategory /> : <NoPermission />)} />
            <Route exact path="/quiz" render={() => (this.checkMenuAccess("quiz") ? <Quiz /> : <NoPermission />)} />
            <Route exact path="/ballot" render={() => (this.checkMenuAccess("ballot") ? <Ballot /> : <NoPermission />)} />
            <Route exact path="/play" render={() => (<Play />)} />
            <Route exact path="/class-detail" render={() => (this.checkMenuAccess("class-management") ? <ClassDetail /> : <NoPermission />)} />
            <Route exact path="/class-management" render={() => (this.checkMenuAccess("class-management") ? <ClassManagement /> : <NoPermission />)} />
            <Route exact path="/export-management" render={() => (this.checkMenuAccess("export-management") ? <ExportManager /> : <NoPermission />)} />
            <Route exact path="/export-detail" render={() => (this.checkMenuAccess("export-management") ? <ExportDetail /> : <NoPermission />)} />
            <Route exact path="/candidate-management" render={() => (this.checkMenuAccess("candidate-management") ? <Candidates /> : <NoPermission />)} />
            <Route exact path="/province-management" render={() => (this.checkMenuAccess("province-management") ? <Provinces /> : <NoPermission />)} />
            {/* component for Client  */}
            {/* <Route path="/client" component={AppClient} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route  path="/client" component={ChartsUser} />  */}
            <Route exact path="/instruction" component={Instruction} />
            <Route exact path="/client" component={HomeClient} />
            <Route exact path="/client/quizz-question" component={Quizlet} />
            <Route exact path="/quizlet/detail" component={DetailQuiz} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/history-quiz" component={HistoryQuiz} />
            <Route exact path="/user-class" component={UserClass} />
            <Route exact path="/voted-proposal" render={() => ( <VotedProposal userInfo = {this.props.userInfo} />)} />
            <Route exact path="/candidate-detail" component={CandidateDetail} />



          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

// export default withRouter(App);
const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
  menuData: getMenuData(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fnGetUserInfo: userProfileActions.fnGetUserInfo,
      fnGetMenuData: menumangementAction.fnGetAllMenuData,
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
