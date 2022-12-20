import React, { useState, useEffect, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import * as Ballots from '../../actions/ballot-manager/ballotActions'
import * as CandidateActions from '../../actions/candidate-manager/candidateActions';
import Form from './Form'
import "./Modal.css"
import { Trans } from 'react-i18next';
import FormUpdateBallot from './FormUpdateBallot ';

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
            dispatch(CandidateActions.fnGetAllCandidates());
    }, [category])

    function onSubmit() {
        console.log("formdata-- ", formData);
        dispatch(Ballots.fnCreateBallotOpen(formData))
        //   type === 'add'
        //         ? dispatch(Candidates.fnCreateCandidate(formData))
        //         : dispatch(Candidates.fnUpdateCandidate(formData))
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title><Trans i18nKey={`quiz-category.${type}`} /></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {type == 'edit' ?
                    <FormUpdateBallot formDataBallot={formData}/> :
                    <Form formData={formData} setFormData={setFormData} />
                }

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}><Trans i18nKey={'quiz.cancel'} /></Button>
                <Button variant="primary" onClick={onSubmit}><Trans i18nKey={'quiz.submit'} /></Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RModal