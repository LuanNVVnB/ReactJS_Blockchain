import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap'

import { Trans } from 'react-i18next';
import * as QuizActions from '../../actions/quiz-management'
import TableTrash from './TableTrash'

const ModalTrash = ({show, onHide}) => {
  const { categoryDeleted } = useSelector(state => state.QuizManagement)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(QuizActions.fnFetchDeletedCategory())
  }, [])

  return (
    <Modal show={show} onHide={onHide} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title><Trans i18nKey={'class.trash'} /></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TableTrash data={categoryDeleted} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}><Trans i18nKey={'quiz.cancel'} /></Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalTrash