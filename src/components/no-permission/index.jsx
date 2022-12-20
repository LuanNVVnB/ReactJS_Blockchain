import React, { Component } from 'react';
import './no-permission.css';

class NoPermission extends Component {

    render() {
        return (
            <div className="gray-bg full-screen">
                <div className="middle-box text-center">
                    <i className="fa fa-lock" style={{ 'fontSize': '10em' }}></i>
                    <h2>Oops! You have not permission.</h2>
                    <div className="error-desc">
                        <a>You must contact the administrator.</a><br />
                        You can go back to main page: <br /><a href="/#/dashboard" className="btn btn-primary m-t">Home</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NoPermission;