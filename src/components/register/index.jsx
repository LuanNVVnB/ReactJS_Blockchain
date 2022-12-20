import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { formValueSelector } from "redux-form";
import * as registerAction from "../../actions/register/registerActions";
import { getUserData } from "../../reducers/register";
import RegisterForm from "./RegisterForm";
import "./register.css";
class RegisterPage extends Component {
  render() {
    const { fnDoRegister, formData,fnDoRegisterMetamask } = this.props;
    return (
      <div className="full-screen">
        <RegisterForm formData={formData} doRegister={fnDoRegister} doRegisterMetamask={fnDoRegisterMetamask} />
      </div>
    );
  }
}

const registerFormUserInput = formValueSelector("registerForm");

const mapStateToProps = (state) => ({
  userData: getUserData(state),
  formData: {
    fullname: registerFormUserInput(state, "fullname"),
    username: registerFormUserInput(state, "username"),
    email: registerFormUserInput(state, "email"),
    phone: registerFormUserInput(state, "phone"),
    password: registerFormUserInput(state, "password"),
    confirm: registerFormUserInput(state, "confirm"),
    province_id: registerFormUserInput(state, "proficiency")
  },
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fnDoRegister: registerAction.fnDoRegister,
      fnDoRegisterMetamask: registerAction.fnDoRegisterMetamask
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
