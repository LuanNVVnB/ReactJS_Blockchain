import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as ratingCommentAction from "../../../actions/commentation/rating-comment/ratingCommentAction";
import { getUserInfo } from "../../../reducers/user-profile";
import { Rate } from "element-react";
import {
  getRatingComment,
  getModalToggle,
  getRatingData
} from "../../../reducers/commentation/rating-comment/fetch";
import { bindActionCreators } from "redux";

class RatingModal extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.saveModal = this.saveModal.bind(this);

    this.state = {
      loading: false,
      showRatingModal: false,
      commentID: null
    };

    // bind context to methods
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      showRatingModal: nextProps.showRatingModal,
      commentID: nextProps.commentID
    });
  }

  closeModal() {
    this.props.fnToggleModalRating(false);
  }

  saveModal(e) {
    this.closeModal();
    this.onSubmit(e);
  }

  onSubmit(e) {
    const pageURL = window.location.pathname;
    this.props.fnAddRating({
      id: this.props.rating.id,
      ratingNumber: this.props.rating.ratingNumber + 1,
      commentID: this.props.commentID,
      pageURL: pageURL,
      checkRating: this.props.checkRating,
      username: this.props.userInfo.username
    });
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    console.log("CID:", this.props.commentID);
    const { fnChangeRatingData } = this.props;
    return (
      <Modal show={this.props.isOpen} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Rating Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <React.Fragment>
            <form>
              <Rate
                value={this.props.rating.ratingNumber}
                onChange={value => fnChangeRatingData(({"key":"ratingNumber", "value" : value}))}
              />
              {this.renderError()}
            </form>
          </React.Fragment>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={this.saveModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: getUserInfo(state),
  rating: getRatingComment(state),
  isOpen: getModalToggle(state),
  commentID: getRatingData(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fnAddRating: ratingCommentAction.fnAddRating,
      fnToggleModalRating: ratingCommentAction.fnToggleModalRating
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RatingModal);
