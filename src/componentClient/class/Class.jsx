
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Class extends Component {
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
                <h1>Class</h1>
                

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
)(Class);
