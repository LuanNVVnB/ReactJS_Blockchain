import React, { Component } from "react";
import "./comment.css";
import CommentForm from "./comment-form";
import CommentList from "./comment-list";
import RatingModal from "./rating-modal";
import * as ratingCommentAction from "../../actions/commentation/rating-comment/ratingCommentAction"
import { connect } from "react-redux";
import { getUserInfo } from "../../reducers/user-profile";
import { getRatingComment, getCheckUpdateRating } from "../../reducers/commentation/rating-comment/fetch";
import { bindActionCreators } from "redux";

class Commentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      refresh: false
    };
  }

  render() {
    const { refresh } = this.props;
    return (
      <div>
        <div className="row wrapper border-bottom white-bg page-heading"  id="setting" >
          <div className="col-lg-12">
            <h2>Commentation</h2>
            <ol id = "setting" className="breadcrumb">
              <li id = "setting" className="breadcrumb-item">
                <span>Home</span>
              </li>
              <li id = "setting" className="breadcrumb-item">
                <span>Commentation</span>
              </li>
            </ol>
          </div>
        </div>
        <div className="wrapper wrapper-content animated">
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="col-12 pt-3 bg-white" id="setting">
                    <CommentList refresh={refresh} />
                    <div className="col-12 pt-3">
                      <CommentForm onRefresh={this.onRefresh} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RatingModal fnChangeRatingData={this.props.fnChangeRatingData} checkRating={this.props.isUpdate} userInfo={this.props.userInfo} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  refresh: state.Commentation.commentReducer.addCommentReducer.refresh,
  userInfo: getUserInfo(state),
  rating: getRatingComment(state),
  isUpdate: getCheckUpdateRating(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fnChangeRatingData: ratingCommentAction.fnChangeRatingData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Commentation);
