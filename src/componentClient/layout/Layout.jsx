
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {


        return (
            <React.Fragment>
                
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-quiziz">
                    <div className="container px-5">
                        <a className="navbar-brand" href="#!">
                             <img className="logo-quizizz" aria-label="Quizizz" src="https://cf.quizizz.com/img/quizizz_logos/purple-brandmark-600x164.png"></img>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link className="nav-link active" to="/client/main">Home</Link>
                                   
                                </li>
                                
                                <li className="nav-item">
                                <Link className="nav-link" to="/client/library"> Library</Link>
                                   
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/client/class"> My Class</Link>
                                   
                                </li>
                                <li className="nav-item">
                                   
                                    <Link className="nav-link" to="/login">Login</Link>
                                  
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                

            </React.Fragment>

        );
    }
}

const mapStateToProps = state => ({
    //   userInfo: getUserInfo(state),
    //   menuData: getMenuData(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    //   fnDoLogout: logoutActions.fnDoLogout,
    //   fnGetUserInfo: userProfileActions.fnGetUserInfo,
    //   fnGetMenuData: menumangementAction.fnGetAllMenuData,
},
    dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);
