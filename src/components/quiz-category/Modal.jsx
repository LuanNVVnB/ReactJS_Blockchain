import React, { useState, useEffect, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import * as QuizActions from '../../actions/quiz-management'
import Form from './Form'
import { Trans } from 'react-i18next';

const initFormData = { name: '', description: '', icon: '', imageIcon: '', status: true }

const RModal = ({ show, onHide, data, type = 'add' }) => {
    const didMount = useRef(false)
    const { category } = useSelector(state => state.QuizManagement)
    const [formData, setFormData] = useState(data ? data : initFormData)

    const dispatch = useDispatch()

    // Effect
    useEffect(() => {
        didMount.current
            ? setFormData(initFormData)
            : didMount.current = true
    }, [category])

    function onSubmit() {
        type === 'add'
            ? dispatch(QuizActions.fnAddCategory(formData))
            : dispatch(QuizActions.fnUpdateCategory(formData.id, formData))
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title><Trans i18nKey={`quiz-category.${type}`} /></Modal.Title>
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

export default RModal