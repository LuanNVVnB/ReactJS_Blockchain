import React, { useState, useEffect, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import * as Candidates from '../../actions/candidate-manager/candidateActions'
import Form from './Form'
import { Trans } from 'react-i18next';
import FormAdd from './FormAdd'

const initFormData = { fullName: '', description: '', imageIcon: '', status: true }

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
            ? dispatch(Candidates.fnCreateCandidate(formData))
            : dispatch(Candidates.fnUpdateCandidate(formData))
    }

    return (
        <Modal show={show} onHide={onHide}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            {
                type && type === 'add' ?
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title><Trans i18nKey={`quiz-category.${type}`} /></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormAdd formData={formData} setFormData={setFormData} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={onHide}><Trans i18nKey={'quiz.cancel'} /></Button>
                            <Button variant="primary" onClick={onSubmit}><Trans i18nKey={'quiz.submit'} /></Button>
                        </Modal.Footer>
                    </> :
                    <>
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
                    </>
            }

        </Modal>
    )
}

export default RModal