import React, { Component } from "react";
import LoginForm from "./LoginForm.jsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginActions from "../../actions/login/loginActions";
import { getUser, getAccessToken } from "../../reducers/login";
import { formValueSelector } from "redux-form";

class LoginPage extends Component {
  render() {
    const { fnDoLogin, formData, fnDoLoginMetamask} = this.props;
    return (
      <div className="full-screen">
        <LoginForm doLogin={fnDoLogin} formData={formData} doLoginMetamask={fnDoLoginMetamask}/>
      </div>
    );
  }
}

const loginFormUserInput = formValueSelector("loginForm");

const mapStateToProps = state => ({
  user: getUser(state),
  accessToken: getAccessToken(state),
  formData: {
    username: loginFormUserInput(state, "username"),
    password: loginFormUserInput(state, "password")
  }
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fnDoLogin: loginActions.fnDoLogin,
      fnDoLoginMetamask: loginActions.fnDoLoginMetamask
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
