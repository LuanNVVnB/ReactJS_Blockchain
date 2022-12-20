import React from "react";
import AvatarSmall from "../layout/AvatarSmall";
import "./navbar.css";


function index(props) {
 
  return (

    <><div className="container-fluid bg-light pt-3 d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <p><i className="fa fa-envelope mr-2"></i>nvvluan2019@gmail.com</p>
              <p className="text-body px-3">|</p>
              <p><i className="fa fa-phone-alt mr-2"></i>+012 345 6789</p>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-primary px-3" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-primary px-3" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-primary px-3" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-primary px-3" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-primary pl-3" href="">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
      <header>
        <div class="inner">
          <div class="logo">
            <div>
              <a className="navbar-brand font-weight-bold" style={{ width: '60px', marginRight: '150px' }} href="#/client"> <h1>MyVote</h1></a>
            </div>
          </div>

          <nav>
            <li><span><a href="#/client">Home</a></span></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Vote Solution
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className={`dropdown-item`} aria-current="page" href="#/voted-proposal"  >
                  voted
                </a>
                <a className={`dropdown-item `} href="#/candidate-detail" >
                  Candidate
                </a>
                <div className="dropdown-divider"></div>
                <a className={`dropdown-item`} href="#/instruction" >
                  Instructions vote
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Quizz
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className={`dropdown-item`} aria-current="page" href="#/client/quizz-question"  >
                  Quizz question
                </a>
                <a className={`dropdown-item `} href="#/history-quiz" >
                  Library
                </a>
                <div className="dropdown-divider"></div>
                <a className={`dropdown-item`} href="#/user-class" >
                  My Class
                </a>
              </div>
            </li>
            <li><span><a href="#/profile">Profile</a></span></li>
            <li className="ml-2"><span><AvatarSmall /></span></li>
          </nav>


        </div>
      </header>
      {/* <div style={{ width: '100%' }} className="bg-light ">
           
          <nav className="navbar navbar-expand-lg navbar-light bg-light " style={{ width: '60%', margin: 'auto' }}>
           <a className="navbar-brand font-weight-bold" style={{ width: '60px', marginRight:'150px'}} href="#/client"> <h1>MyVote</h1></a>
            <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className={`nav-link`} aria-current="page" href="#/client"  >
                    Home
                  </a>
                </li>
                 <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Quizz
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                     <a className={`dropdown-item`} aria-current="page" href="#/client/quizz-question"  >
                    Quizz question
                  </a>
                   <li className="nav-item">
                  <a className={`dropdown-item `} href="#/history-quiz" >
                    Library
                  </a>
                </li>
                    <div className="dropdown-divider"></div>
                    <a className={`dropdown-item`} href="#/user-class" >
                    My Class
                  </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Vote
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#/voted-proposal">vote proposal</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                 <li className="nav-item">
                <a className={`nav-link ${'#/profile' == window.location.hash ? 'active' : null}`} href="#/profile" >
                  Profile
                </a>
              </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
             
            </div>
          </nav></div> */}

    </>


  );

}

export default index