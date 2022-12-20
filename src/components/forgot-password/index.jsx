import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { formValueSelector } from "redux-form";
import ForgotPassword from "./ForgotPassword.jsx";
import { getUserForgot,getStatusForgot, getAuthCode,getIsAuth,getAuthPass } from "../../reducers/forgetpassword";
import * as forgotActions from "../../actions/forgot-password/forgotActions";
import ResetPassword from "./ResetPassword";
import * as resetActions from "../../actions/forgot-password/resetActions";
import { changeInput } from "../../actions/forgot-password/index.js";

class ForgotPasswordPage extends Component {
  render() {
    const { fnDoForgot, formDataForgot,userStatus, userforgot, fnDoReset,formDataReset,fnDoChange,authCode,accessToken,fnDoUpdatePass,authPass,fnChangeAuthPass } = this.props;
    console.log("userr=======",userforgot);
    console.log('status=========',userStatus)
    return (
      <div className="full-screen">      
      {parseInt(userStatus) === 0 ?  <ForgotPassword doLogin={fnDoForgot} formData={formDataForgot} /> 
      : <ResetPassword authPass={authPass} fnChangeAuthPass={fnChangeAuthPass} authCode={authCode} fnDoChange={fnDoChange} userforgot={userforgot} doLogin={ fnDoReset} formData={formDataReset} isAuth = {accessToken} updatePass = {fnDoUpdatePass}/> }
      </div>
    );
  }
}

const forgotUserInput = formValueSelector("forgotPassword");
// const resetUserInput = formValueSelector("resetPassword");
const resetUserInput = formValueSelector("resetPassword");
const mapStateToProps = state => ({
  userforgot:getUserForgot(state),
  formDataForgot: forgotUserInput(state, "emailForget"),
  userStatus:getStatusForgot(state),  
  authCode: getAuthCode(state),
  authPass: getAuthPass(state),
  formDataReset:{
    // resetUserInput(state, "resetEmail")
    emailReset:   resetUserInput(state, "resetEmail"),
    passwordReset: resetUserInput(state, "reset-password"),
  },
  accessToken:getIsAuth(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fnDoForgot: forgotActions.fnDoForgot,
      fnDoReset: resetActions.fnDoReset,
      fnDoChange: changeInput,
      fnDoUpdatePass:resetActions.fnDoUpdatePass,
      fnChangeAuthPass: resetActions.fnChangeAuthPass
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage);
