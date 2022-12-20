import React, { useState, useEffect, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import * as QuizActions from '../../actions/quiz-management'
import Form from './Form'
import { Trans, withTranslation } from 'react-i18next';

const initFormData = { name: '', Categories: [], imageUrl: '', visibility: true, time: '' }

const RModal = ({ show, onHide, data, type = 'add-quiz' }) => {
    const didMount = useRef(false)
    const { quiz } = useSelector(state => state.QuizManagement)
    const [formData, setFormData] = useState(data ? data : initFormData)

    const dispatch = useDispatch()

    useEffect(() => {
        didMount.current
            ? setFormData(initFormData)
            : didMount.current = true
        didMount.current = true
    }, [quiz])

    function onSubmit() {
        type === 'add-quiz'
            ? dispatch(QuizActions.fnAddQuiz(formData))
            : dispatch(QuizActions.fnUpdateQuiz(formData.id, formData))
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title><Trans i18nKey={`quiz.${type}`} /></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form formData={formData} setFormData={setFormData} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}><Trans i18nKey={'quiz.cancel'} /></Button>
                <Button variant="primary" onClick={onSubmit}><Trans i18nKey={'quiz.submit'} /></Button>
            </Modal.Footer>
        </Modal>
    )
}

export default withTranslation()(RModal)