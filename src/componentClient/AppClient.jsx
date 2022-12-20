import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, withRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "../components/login"
import Main from "./main/Main";
import Library from "./library/Library";
import Class from "./class/Class"

class AppClient extends React.Component {

    render() {

        return (

            <div className="full-screen">
                <div className="col-lg-12 white-bg full-screen">
                    <Layout />
                  
                        <Route path="/login"component={Login} />
                        <Route path="/client/main" component={Main}/>
                        <Route path="/client/library" component={Library} />
                        <Route path="/client/class" component={Class} />
                  
                </div>
            </div>


        );
    }
}

// export default withRouter(App);
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {

        },
        dispatch
    );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppClient));
