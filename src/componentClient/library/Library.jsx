
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Layout from "../layout/Layout";

class Library extends Component {
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


        return (<>
            {/* <div className="full-screen">
            <div className="col-lg-12 white-bg full-screen">
               */}
                    {/* <Layout />  */}

                <h1>msdavsda</h1>  
            {/* </div>
         </div> */}
        </>
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
)(Library);
