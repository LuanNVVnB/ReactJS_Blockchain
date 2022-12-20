import React, { Component } from "react";
import {Modal, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import {  fnUpdateComment } from '../../../actions/commentation/comment/commentActions'

class UpdateModal extends Component {

  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.updateModal = this.updateModal.bind(this);

    this.state = {
      loading: false,
      showUpdateModal: false,
      comment: {
        commentID: this.props.commentID,
        content: this.props.content,
      }
    }

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      showUpdateModal: nextProps.showUpdateModal,
      comment: {
        ...this.state.comment,
      }
    })
  }

  closeModal() {
    this.setState({
      ...this.state,
      showUpdateModal: false
    })

    this.props.onCloseModal();
  }

  updateModal(e) {
    this.closeModal();
    this.setState({
      comment: {
        content: ''
      }
    })
    this.onSubmit(e);
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
    this.props.onUpdateComment(this.props.commentID, this.state.comment);
  }

  render() {
    return (
      <Modal show={this.state.showUpdateModal} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <React.Fragment>
            <form>
              <div className='form-group'>
                <textarea
                  onChange={this.handleFieldChange}
                  value={this.state.comment.content}
                  className='form-control'
                  placeholder='Your Comment'
                  name='content'
                  rows='5'
                />
              </div>
            </form>
          </React.Fragment>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={this.updateModal}>
            Update ➤
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateComment: (commentID, comment) => {
      dispatch(fnUpdateComment(commentID, comment, window.location.pathname));
    }
  };
};

export default connect(null, mapDispatchToProps)(UpdateModal);