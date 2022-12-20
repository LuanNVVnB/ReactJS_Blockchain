import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import * as BallotActions from '../../actions/ballot-manager/ballotActions'
import { useDispatch } from 'react-redux';
import { Trans } from 'react-i18next'
function ModalType(props) {
  const dispatch = useDispatch()

  const onSubmit = () => {
    if (props.action == 'create') dispatch(BallotActions.fnCreateBallot(props.ballot));
    else dispatch(BallotActions.fnUpdateBallot(props.ballot));
    props.onHide()
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h2>
          {props.content}
        </h2>
      </Modal.Body>
      <Modal.Footer>

        <Button variant="secondary" onClick={props.onHide}><Trans i18nKey={'quiz.cancel'} /></Button>
        <Button variant="primary" onClick={onSubmit}><Trans i18nKey={'quiz.submit'} /></Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalType