import React, { Component } from "react";
import Comment from "../comment";
import { connect } from 'react-redux';
import { fnFetchComments } from "../../../actions/commentation/comment/commentActions";

class CommentList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };
  }

  componentWillMount() {
    const pageURL = window.location.pathname;
    this.props.onFetchComments(pageURL);
  }

  componentWillReceiveProps(props) {
    const { refresh } = this.props;
    if (props.refresh !== refresh) {
      const pageURL = window.location.pathname;
      this.props.onFetchComments(pageURL);
    }
  }

  render() {
    const props = this.props;
    const totalComment = props.comments.length 
              + props.comments.map(c => c.replies.length).reduce(((total, num) => total + num), 0);
    return (
      <div className="commentList text-left">
        <h5 className="text-muted mb-4">
          <span className="badge badge-success">{totalComment}</span>{" "}
          comment{totalComment > 0 ? "s" : ""}
        </h5>
  
        {props.comments.length === 0 && !props.loading ? (
          <div className="alert text-center alert-info">
            Be the first to comment
          </div>
        ) : null}
  
        {props.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  if(state.Commentation.commentReducer.fetchCommentReducer) {
    return {
      comments: state.Commentation.commentReducer.fetchCommentReducer.comments,
      loading: state.Commentation.commentReducer.fetchCommentReducer.loading
    }
  }
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchComments: pageURL => {
      dispatch(fnFetchComments(pageURL));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
