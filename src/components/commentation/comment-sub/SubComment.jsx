import React, { Component } from "react";
import defaultAvatar from "../../../assets/theme/img/default-avatar.png";
import moment from "moment";
import UpdateModal from "../update-modal";
import { connect } from "react-redux";
import { fnDeleteComment } from "../../../actions/commentation/comment/commentActions";
import { getUserInfo } from "../../../reducers/user-profile";
import {
  getRatingComment,
  getCheckUpdateRating
} from "../../../reducers/commentation/rating-comment/fetch";
import { bindActionCreators } from "redux";
import {
  fnChangeRatingData,
  fnToggleModalRating,
  fnFetchRating,
  fnLoadRatingData
} from "../../../actions/commentation/rating-comment/ratingCommentAction";

class SubComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showUpdateModal: false,
      showRatingModal: false
    };

    this.onUpdate = this.onUpdate.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onRating = this.onRating.bind(this);
  }

  onUpdate(e) {
    this.setState({
      showUpdateModal: true
    });
  }

  onRating() {
    const commentID = this.props.comment.id;
    const username = this.props.userInfo.username;
    this.props.onFetchRating(commentID, username);
    this.props.fnLoadRatingData(commentID);
    this.setState({
      showRatingModal: true
    });
  }

  onCloseModal() {
    this.setState({
      showUpdateModal: false,
      showRatingModal: false
    });
  }

  render() {
    const reply = this.props.comment;
    let ratingAvg = null;
    if(reply.ratings !== undefined && reply.ratings.length > 0){
      reply.ratings.forEach(e =>{
        ratingAvg += e.ratingNumber;
      })
      ratingAvg = (ratingAvg/reply.ratings.length);
    }
    return (
      <div className="row comment-sub">
        <div className="padding-image comment comment-image ">
          <div className="thumbnail">
            <img
              className="img-responsive user-photo"
              src={defaultAvatar}
              alt=""
            ></img>
          </div>
        </div>
        <div className="col-sm-7 comment comment-body">
          <div className="panel panel-default">
            <div className="panel-heading">
              <strong>{reply.username}</strong>{" "}
              <span className="text-muted">reply</span>{" "}
              <span>{moment(reply.createdAt).fromNow()}</span>
              <i className="fa fa-star btn-action" onClick={this.onRating}></i>
              <span className="btn-action">
                {ratingAvg}
                <i className="fa fa-star rating-star"></i>
              </span>
              {reply.username === this.props.userInfo.username ? <i className="btn-action fa fa-pencil" onClick={this.onUpdate}></i> : "" }
              {reply.username === this.props.userInfo.username ? <i className="btn-action fa fa-trash-o" onClick={() => this.props.onDeleteComment(reply.id, window.location.pathname)}></i> : "" }
            </div>
            <div className="panel-body">{reply.content}</div>
          </div>
        </div>
        <UpdateModal
          showUpdateModal={this.state.showUpdateModal}
          commentID={reply.id}
          content={reply.content}
          onCloseModal={this.onCloseModal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: getUserInfo(state),
  rating: getRatingComment(state),
  isUpdate: getCheckUpdateRating(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fnChangeRatingData: fnChangeRatingData,
      fnToggleModalRating: fnToggleModalRating,
      onFetchRating: fnFetchRating,
      onDeleteComment: fnDeleteComment,
      fnLoadRatingData: fnLoadRatingData
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SubComment);
