

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Layout from "../layout/Layout";

class Main extends Component {
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
                
            </React.Fragment>


        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

},
    dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
