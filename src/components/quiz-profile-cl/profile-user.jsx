import React, { Component } from "react";
import "./profile.css";
import Narbar from "../quiz-navbar-cl/nav-bar";
import Footer from "../quiz-footer-cl/footer";
import UserProfile from "../user-profile";

export class Profile extends Component {
  render() {
    return (
      <div>
        <body className="body-profile">
          <div className="full-screen">
            <div className="col-lg-12 white-bg full-screen">
              <Narbar />
              <div className="profile-container-v4 container-fluid">
                <UserProfile/>
            
        
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Profile;
