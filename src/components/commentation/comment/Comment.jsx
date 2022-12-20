import React, { Component } from "react";
import moment from 'moment';
import ReplyModal from "../reply-modal";
import UpdateModal from "../update-modal"
import SubComment from "../comment-sub";
import { connect } from 'react-redux';
import {fnDeleteComment} from '../../../actions/commentation/comment/commentActions';
import defaultAvatar from "../../../assets/theme/img/default-avatar.png";
import { getUserInfo} from '../../../reducers/user-profile';
import { getRatingComment, getCheckUpdateRating } from "../../../reducers/commentation/rating-comment/fetch";
import { fnFetchRating, fnChangeRatingData, fnToggleModalRating } from "../../../actions/commentation/rating-comment/ratingCommentAction";
import { bindActionCreators } from "redux";
import { fnLoadRatingData } from "../../../actions/commentation/rating-comment/ratingCommentAction";


class Comment extends Component{

  constructor(props) {
    super(props);

    this.state = {
      showUpdateModal: false,
      showReplyModal: false,
      showRatingModal: false
    }

    this.onUpdate = this.onUpdate.bind(this);
    this.onReply = this.onReply.bind(this);
    this.onRating = this.onRating.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onReply(e) {
    this.setState({
      showReplyModal: true
    })
  }

  onUpdate(e) {
    this.setState({
      showUpdateModal: true
    })
  }

  onRating() {
    const commentID = this.props.comment.id;
    const username = this.props.userInfo.username;
    this.props.onFetchRating(commentID, username);
    this.props.fnLoadRatingData(commentID)
    this.setState({
      showRatingModal: true
    })
  }

  onCloseModal() {
    this.setState({
      showUpdateModal: false,
      showReplyModal: false,
      showRatingModal: false
    })
  }

  render() {
    const {id, content, createdAt, replies, username, ratingAvg} = this.props.comment;
    return (
      <div>
        <div className="row">
          <div className="padding-image comment comment-image ">
              <div className="thumbnail">
                  <img className="img-responsive user-photo" src={defaultAvatar} alt=""></img>
              </div>
          </div>
          <div className="col-sm-7 comment comment-body">
              <div className="panel panel-default">
                  <div className="panel-heading">
                      <strong>{username}</strong> <span className="text-muted">reply</span> <span>{moment(createdAt).fromNow()}</span>
                      <i className="fa fa-star btn-action" onClick={this.onRating}></i>
                      <i className="fa fa-reply btn-action" onClick={this.onReply}></i>
                      <span className="btn-action">{ratingAvg}<i className="fa fa-star rating-star"></i></span>
                      {username === this.props.userInfo.username ? <i className="btn-action fa fa-pencil" onClick={this.onUpdate}></i> : "" }
                      {username === this.props.userInfo.username ? <i className="btn-action fa fa-trash-o" onClick={() => this.props.onDeleteComment(id, window.location.pathname)}></i> : "" }
                  </div>
                  <div className="panel-body">
                  {content}
                  </div>
              </div>
          </div>
          <UpdateModal showUpdateModal={this.state.showUpdateModal} commentID={id} content={content} onCloseModal={this.onCloseModal}/>
          <ReplyModal showReplyModal={this.state.showReplyModal} parentID={id} onCloseModal={this.onCloseModal}/>
        </div>
        {
          replies.map((reply, index) => (
            <SubComment comment={reply} key={index}/>
          ))
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Comment);