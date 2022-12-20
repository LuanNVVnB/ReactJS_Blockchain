import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ACCESS_TOKEN } from "../../config/configUrl";
class LoginSocial extends Component {
  getUrlParameter(name) {
    name = name.replace(/[[]/, "[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    var results = regex.exec(this.props.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  render() {
    const token = this.getUrlParameter("token");
    const error = this.getUrlParameter("error");
    console.log("TOKEN: " + token);
    console.log("ERROR: " + error);
    if (token) {
      let tokenData = {
        tokenType: "Bearer",
        accessToken: token
      };
      localStorage.setItem(ACCESS_TOKEN, JSON.stringify(tokenData));
      return (
        <Redirect
          to={{
            pathname: "/dashboard",
            state: { from: this.props.location }
          }}
        />
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: this.props.location,
              error: error
            }
          }}
        />
      );
    }
  }
}

export default LoginSocial;
