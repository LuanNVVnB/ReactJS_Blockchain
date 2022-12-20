import React from "react";
import { reduxForm, Field } from 'redux-form';
import { Link } from "react-router-dom"
import "../../assets/css/forgot.css"
let ForgotPassword = props => {
    const { formData, doLogin } = props;
    return (
        <>

            <div className="container padding-bottom-3x mb-2 mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="forgot">
                            <h2>Forgot your password?</h2>
                            <p>Change your password in three easy steps. This will help you to secure your password!</p>
                            <ol className="list-unstyled">
                                <li><span className="text-primary text-medium">1. </span>Enter your email address below.</li>
                                <li><span className="text-primary text-medium">2. </span>Our system will send you a temporary link</li>
                                <li><span className="text-primary text-medium">3. </span>Use the link to reset your password</li>
                            </ol>
                        </div>
                        <div className="card mt-4">
                            <div className="card-body">
                                <div className="form-group"> <label for="email-for-pass">Enter your email address</label>
                                    <Field component="input" id="email" name="emailForget" placeholder="email" type="text" className="form-control" />
                                    <small className="form-text text-muted">Enter the email address you used during the registration on Bootstrap.com. Then we'll email a link to this address.</small> </div>
                            </div>
                            <div className="card-footer">
                                <button onClick={() => doLogin(formData)} className="btn btn-success new-password">Get New Password</button>
                                <span className="btn btn-danger" type="submit"><Link to='/login' className="back-login">Back Login </Link></span> </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div classNameName="card border-primary h-100">
                <div classNameName="card-body d-flex flex-column align-items-start">
                    <form >
                    <div classNameName="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <Field component="input" id="email" name="emailForget" placeholder="email" type="text"
                                        classNameName="form-control form-control-lg" />
                    </div>
                   
                </form>
                    <button onClick={() => doLogin(formData)} classNameName="btn btn-primary mt-auto">Button</button>
                </div>
            </div> */}

        </>
    )
}

ForgotPassword = reduxForm({
    form: 'forgotPassword'
})(ForgotPassword);


export default ForgotPassword;
