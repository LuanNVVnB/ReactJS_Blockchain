import React, { useState,useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import Background from "../../assets/theme/img/iphone2.jpg";
import { Trans, withTranslation } from 'react-i18next';
import Web3 from 'web3';
// import { useDispatch, useSelector } from 'react-redux';
import {province} from "../../utils/province";
// import * as ProvinceActions from '../../actions/province-manager/provinceAction';

let RegisterForm = (props) => {
  const web3 = new Web3(window.ethereum);
  const [dataMetaMask, setDataMetaMask] = useState('');
  const [registerMetaMask, setRegisterMetaMask] = useState(false);
  const { formData, doRegister, doRegisterMetamask } = props;
  
  // const province = useSelector(state => state.ProvinceManagerReducer.provinceData);
  //   // Dispatch
  //   const dispatch = useDispatch()

  //   // Effect
  //   useEffect(() => {
  //       dispatch(ProvinceActions.fnGetAllProvinces())
  //   }, [dispatch])

  const doConnectMetaMask = () => {
    if (!window.ethereum) {
      alert("install metamask")
    } else {
      setRegisterMetaMask(true);
      connectMM().then(function (data) {
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
      <div className="form-v2">
        <div class="page-content2">
          <div class="form-v2-content">
            <div class="form-left">
              <img src={Background} alt="form" style={{width: '100%', height:'95%'}}/>
              <div class="text-1">
                <p>
                  Become the best version of yourself<span></span>
                </p>
              </div>
              <div class="text-2">
                <p>
                  <span>MyVote</span>
                </p>
              </div>
            </div>
            <form
              class="form-detail"
              action="#"
              method="post"
              id="registerForm"
            >
              <h2><Trans i18nKey='Register.register' /></h2>
              <div class="form-row">
                <label for="full-name"><Trans i18nKey='Register.fullname' />:</label>
                <Field
                  type="text"
                  component="input"
                  name="fullname"
                  id="fullname"
                  class="input-text"
                  placeholder="ex: Cao Van Kha"
                  required
                />
              </div>
              <div class="form-row">
                <label for="user-name"><Trans i18nKey='Register.username' />:</label>
                <Field
                  type="text"
                  component="input"
                  name="username"
                  id="username"
                  class="input-text"
                  placeholder="ex: KhaCV1"
                  required
                />
              </div>
              <div class="form-row">
                <label for="your_email"><Trans i18nKey='Register.email' />:</label>
                <Field
                  type="text"
                  component="input"
                  name="email"
                  id="email"
                  class="input-text"
                  required
                  pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                />
              </div>
              <div className="form-row">

              </div>
              <div class="form-row">
                <div className="col-6"><label for="your_phone col-6"><Trans i18nKey='Register.phone' />:</label>
                  <Field
                    type="text"
                    component="input"
                    name="phone"
                    id="phone"
                    class="input-text"
                  /></div>
                <div className="col-6">
                  <label className="">Proficiency:</label>
                  <Field className="input-text-select" name="proficiency" component="select">
                    <option />
                    {province?.length > 0 && province.map((item, index) =>{
                      return <option value={item.Slug} key={index}>{item.Country}</option>
                    })}
                    
                   
                  </Field>
                </div>

              </div>
              <div class="form-row">
                <label for="password"><Trans i18nKey='Register.pass' />:</label>
                <Field
                  type="password"
                  component="input"
                  name="password"
                  id="password"
                  class="input-text"
                  required
                />
              </div>
              <div class="form-row">
                <label for="comfirm-password"><Trans i18nKey='Register.confirm' />:</label>
                <Field
                  type="password"
                  component="input"
                  name="confirm"
                  id="confirm"
                  class="input-text"
                  required
                />
              </div>
              <div class="form-checkbox"></div>
              <div className="buttonRegister mt-3 mr-1">
                <a
                  onClick={() => doConnectMetaMask()}
                  className="btn btn-block btn-dark"
                >
                  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--2BKxC6TA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oamoap1p2sblkrlbqtoe.png" className="metamaskimg" />Connect metamask
                </a>
              </div>
              <div class="form-row-last">
                <input
                  type="button"
                  name="register"
                  class="register"
                  value="Register"
                  onClick={() => { registerMetaMask ? doRegisterMetamask({ ...formData, codeMetaMask: dataMetaMask }) : doRegister(formData) }}
                />
              </div>
            </form>
          </div>
        </div>
      </div >
    </div >
  );
};
RegisterForm = reduxForm({
  form: "registerForm",
})(RegisterForm);
export default withTranslation()(RegisterForm);
