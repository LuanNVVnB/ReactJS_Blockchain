import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import * as CONFIG from "../../config/configUrl";
import imageSingup from "../../assets/theme/img/iphone.jpg";
import Web3 from "web3";
import { Link } from "react-router-dom";
import "./login.css";
import Translate from "../translation";
import { Trans, Translation, withTranslation } from 'react-i18next';

let LoginForm = (props) => {
  const web3 = new Web3(window.ethereum);
  const [dataMetaMask, setDataMetaMask] = useState('');
  const [loginMetaMask, setLoginMetaMask] = useState(false);
  const { formData, doLogin, doLoginMetamask } = props;
  const doConnectMetaMask = () => {
    if (!window.ethereum) {
      alert("install metamask")
    } else {
      setLoginMetaMask(true);

      connectMM().then(function (data) {
        console.log("data-", data)
        const rand = randomString(10);
        web3.eth.personal.sign(rand, data[0], (error, hash) => {
          if (!error) {
            setDataMetaMask(rand + " " + hash);
          } else {
            alert("error", error);
          }
        })
      })

    }

  }
  async function connectMM() {
    const connect = await window.ethereum.request({ method: "eth_requestAccounts" });
    return connect
  }

  function randomString(long) {
    const textArr = ["a", "b", "0", "1", "2", "3"];
    var s = "";
    for (var i = 0; i < long; i++) {
      s += textArr[Math.floor(Math.random() * textArr.length)];
    }
    return s;

  }

  return (
    <div className="col-lg-12 white-bg full-screen">
      <div className="content">
        <div className="container" >
          <div className="loginform">
            <div className="row">
              <div className="col-6">
                <img src={imageSingup} alt="Image" className="img-fluid" />
              </div>
              <div className="col-6 contents" >
                <div className="row ">
                  <div className="">
                    <div className="text-right">
                     <Translate /></div>
                    <div className="mb-4" style={{textAlign: "center"}}>
                      
                      <div className="langue-login">
                        <h1><Trans i18nKey='Login.signin' /></h1>
                       
                         <p className="mb-4">
                        Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                        consectetur adipisicing.
                      </p>
                      </div>
                     
                    </div>
                    <form action="#" method="post">
                      <div className="form-group first">
                        <Field
                          type="text"
                          component="input"
                          id="username"
                          name="username"
                          className="form-control"
                          placeholder="User name"
                        />
                      </div>
                      <div className="form-group last mb-4">
                        <Field
                          type="password"
                          component="input"
                          id="password"
                          name="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>

                      <div className="d-flex mb-5 align-items-center">
                        <label className="checkRemember">
                          <input type="checkbox" />
                          <span className="caption"><Trans i18nKey='Login.remember' /></span>
                        </label>

                        <span className="ml-auto">
                          <a href="#/forgot-password" className="forgot-pass">
                            <Trans i18nKey='Login.forgot' />
                          </a>
                        </span>
                      </div>
                      <div className="buttonRegister">
                        <a
                          onClick={() => { loginMetaMask ? doLoginMetamask({ ...formData, codeMetaMask: dataMetaMask }) : doLogin(formData) }}
                          className="btn btn-block btn-primary"
                        >
                          <Trans i18nKey='Login.buttonLogin' />
                        </a>
                      </div>
                      <div className="buttonRegister">
                        <a
                          onClick={() => doConnectMetaMask()}
                          className="btn btn-block btn-dark"
                        >
                          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--2BKxC6TA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oamoap1p2sblkrlbqtoe.png" className="metamaskimg" />Connect metamask
                        </a>
                      </div>
                      <div className="text-center" >
                        <div className="" style={{textAlign: "center"}}>
                          <div className="d-block text-left my-4 text-muted" >
                            <Trans i18nKey='Login.orLogin' />?
                            <a
                              className="text-info ml-2"
                              href="#/register"
                            >
                              <Trans i18nKey='Login.buttonRegister' />
                            </a>
                            
                          </div>
                        </div>
                        <div className="social-login">
                          <a href={CONFIG.GOOGLE_AUTH_URL} className="google">
                            <span className="fa fa-google fa-2x"></span>
                          </a>
                          <a href="#" className="facebook">
                            <span className="fa fa-facebook fa-2x"></span>
                          </a>
                          <a href="#" className="twitter">
                            <span className="fa fa-twitter fa-2x"></span>
                          </a>

                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginForm = reduxForm({
  form: "loginForm",
})(LoginForm);

export default withTranslation()(LoginForm);
