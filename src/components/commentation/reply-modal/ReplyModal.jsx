import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fnAddComment } from "../../../actions/commentation/comment/commentActions";
import { getUserInfo } from "../../../reducers/user-profile";

class ReplyModal extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.saveModal = this.saveModal.bind(this);

    this.state = {
      loading: false,
      showReplyModal: false,
      parentID: null,
      error: "",
      comment: {
        username: this.props.userInfo.username,
        content: "",
        pageURL: window.location.pathname,
        parentID: null
      }
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.showReplyModal !== undefined && nextProps.showReplyModal) {
      this.setState({
        ...this.state,
        showReplyModal: nextProps.showReplyModal,
        parentID: nextProps.parentID,
        comment: {
          ...this.state.comment,
          content: "",
          parentID: nextProps.parentID
        }
      });
    }
  }

  closeModal() {
    this.setState({
      ...this.state,
      showReplyModal: false
    });

    this.props.onCloseModal();
  }

  saveModal(e) {
    if (this.state.comment.content === "" || this.state.comment.content === null) {
    }else{
      this.closeModal();
      this.onSubmit(e);
    }
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
    this.props.onAddComment(this.state.comment);
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <Modal show={this.state.showReplyModal} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Reply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <React.Fragment>
            <form>
              <div className="form-group">
                <textarea
                  onChange={this.handleFieldChange}
                  value={this.state.comment.content}
                  className="form-control"
                  placeholder="Your Comment"
                  name="content"
                  rows="5"
                  required="required"
                />
              </div>
              {this.renderError()}
            </form>
          </React.Fragment>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={this.saveModal}>
            Reply ➤
          </Button>
        </Modal.Footer>
      </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReplyModal);
