import React from "react";
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import "../../assets/css/forgot.css"
let ResetPassword = props => {
    const { formData, updatePass, doLogin, userforgot, fnDoChange, authCode, isAuth,fnChangeAuthPass,authPass } = props;
    
    return (
        <div className="container padding-bottom-3x mb-2 mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="forgot">
                        <h2>Forgot your password?</h2>
                        <p>Import email or number phone used for your Google Accounts and password.</p>
                        <ol className="list-unstyled">
                            <li><span className="text-primary text-medium">1.</span>If the information has been filled in and you have to sign in to another account, use a different account.
                                If you see a Gmail that describes an alternate page because of the login page, then to the right of that page, use Sign in. </li>
                            <li><span className="text-primary text-medium">2.</span>If you log on to a public computer, be sure to sign out before you leave the computer. Let's find out how</li>
                        </ol>
                    </div>
                    {isAuth == false ?
                        <>
                            <div className="card mt-4 card-code">

                                <div className="form-group"> <label for="email-for-pass">Enter code from your email address</label>
                                    <input component="input" id="password" type="text"
                                        placeholder="code" className="form-control " onChange={(e) => fnDoChange(e.target.value)} />
                                    <small className="form-text text-muted">Then we'll email a link to this address.</small>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button onClick={() => doLogin(authCode)} className="btn btn-primary mt-auto">submit code</button>
                            </div>


                        </>

                        :
                        <>
                            <div className="card mt-4 card-code">
                                <div className="form-group">
                                    <label for="email-for-pass">Enter email </label>
                                    <input component="input" id="reset" name="resetEmail" type="text" value={userforgot.email} readOnly={true}
                                        className="form-control form-control-lg" />
                                    <small className="form-text text-muted">Then we'll email this address.</small>
                                </div>
                                <div className="form-group">
                                    <label for="email-for-pass">Enter new password</label>
                                    <input component="input" id="password" name="reset-password" type="password" onChange={(e)=>fnChangeAuthPass(e.target.value)}
                                        placeholder="new password" className="form-control form-control-lg" />
                                    <small className="form-text text-muted">Then we password strong.</small>
                                </div>
                                <div className="card-footer">
                                </div>
                                <button onClick={() => updatePass(authPass)} className="btn btn-primary mt-auto">Update new password</button>

                            </div>




                        </>
                    }
                </div>
            </div>


        </div>

    )
}

ResetPassword = reduxForm({
    form: 'resetPassword'
})(ResetPassword);


export default connect(state => ({ 
    // alternatively, you can set initial values here...
    initialValues: {
        resetEmail: "adc@gmail.com"
    } 
  }))(ResetPassword);
