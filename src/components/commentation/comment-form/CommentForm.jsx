import React, { Component } from "react";
import { connect } from "react-redux";
import { fnAddComment } from "../../../actions/commentation/comment/commentActions";
import { getUserInfo } from "../../../reducers/user-profile";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",
      comment: {
        username: this.props.userInfo.username,
        content: "",
        pageURL: window.location.pathname,
        parentID: null
      }
    };

    this.nameRef = React.createRef();
    this.messageRef = React.createRef();

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  componentDidMount() {
    this.messageRef.current.focus();
  }

  handleFieldChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };

  onSubmit(e) {
    e.preventDefault();
    let username = this.state.comment.username || this.props.userInfo.username;
    let comment = {
      username: username,
      content: this.state.comment.content,
      pageURL: this.state.comment.pageURL,
      parentID: this.state.comment.parentID
    };
    if (this.state.comment.content === "" || this.state.comment.content === null) {
    }else{
      this.props.onAddComment(comment);
      this.clearForm();
    }
  }

  clearForm() {
    this.setState({
      comment: {
        username: this.props.userInfo.username,
        content: "",
        pageURL: window.location.pathname,
        parentID: null
      }
    });
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.content}
              className="form-control"
              placeholder="Your Comment"
              name="content"
              rows="5"
              ref={this.messageRef}
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button disabled={this.state.loading} className="btn btn-primary">
              Comment ➤
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: getUserInfo(state)
});

const mapDispatchToProps = dispatch => {
  return {
    onAddComment: comment => {
      dispatch(fnAddComment(comment));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
