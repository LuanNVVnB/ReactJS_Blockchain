import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Container, Button } from 'react-bootstrap'

import { ADD_QUESTION } from './constants'
import * as QuizActions from '../../actions/quiz-management'
import { Trans } from 'react-i18next';
const answerInit = [
    {
        content: '',
        correct: false
    },
    {
        content: '',
        correct: false
    }
]

const RModal = ({ show, onHide, quizId, quesId, ans, ques, type = ADD_QUESTION }) => {
    const [answer, setAnswer] = useState(ans ? ans : answerInit)
    const [question, setQuestion] = useState(ques ? ques : '')

    const dispatch = useDispatch()

    useEffect(() => {
        setQuestion(ques ? ques : '')
        setAnswer(ans ? ans : answerInit)
    }, [show])

    function addAnswer() {
        setAnswer(
            [...answer,
            {
                content: '',
                correct: false
            }
            ]
        )
    }

    function removeAnswer(no) {
        if (answer.length - 1 < 2) return
        setAnswer(answer.filter((i, index) => index != no))
    }

    function handleChange(no, content) {
        setAnswer(answer.map((i, index) => index === no ? { ...i, content } : i))
    }

    function handleCorrect(no) {
        setAnswer(answer.map((i, index) => index === no ? { ...i, correct: true } : { ...i, correct: false }))
    }

    function handleSubmit() {
        let data = {
            content: question,
            answers: [...answer]
        }
        type === ADD_QUESTION
            ? dispatch(QuizActions.fnAddNewQuestionToQuiz(quizId, data))
            : dispatch(QuizActions.fnUpdateQuestion(quizId, quesId, data))
    }

    return (
        <Modal show={show} onHide={onHide} backdrop="static" centered dialogClassName="modal-70w">
            <div className="modal-add-question p-3 d-flex flex-column" style={{ background: 'black', minHeight: '70vh' }}>
                <Modal.Header>
                    <Modal.Title className="text-white">{type}</Modal.Title>
                    <div className="btn btn-dark ml-auto" onClick={onHide}>
                        <i className="fa fa-times" aria-hidden="true" />
                    </div>
                </Modal.Header>

                <Container className="bg-primary rounded mt-3" fluid>
                    <div className="row" style={{ minHeight: '60vh' }}>
                        <div className="col-12 p-3">
                            <textarea className="text-left form-control border-0 bg-dark text-white w-100 h-100 font-weight-bold" value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
                        </div>
                        <div className="col-12">
                            <div className="row h-100 py-2">
                                <div className="col">
                                    <div className={`bg-${answer[0].correct ? 'success' : 'info'} w-100 h-100 rounded d-flex flex-column`}>
                                        <div className="p-2 d-flex justify-content-between d-flex justify-content-between">
                                            <span className="btn btn-danger badge badge-danger" onClick={() => removeAnswer(0)}>
                                                <i className="fa fa-trash-o" aria-hidden="true" />
                                            </span>
                                            <span className="btn btn-white badge badge-white rounded-circle d-flex justify-content-center" style={{ width: '20px', height: '20px' }} onClick={() => handleCorrect(0)}>
                                                <i className={`d-${answer[0].correct ? 'block' : 'none'} fa fa-check text-primary`} aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="h-100 p-1">
                                            <textarea className="text-left form-control border-0 w-100 h-100 bg-dark text-white font-weight-bold" value={answer[0].content} onChange={(e) => handleChange(0, e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className={`bg-${answer[1].correct ? 'success' : 'info'} w-100 h-100 rounded d-flex flex-column`}>
                                        <div className="p-2 d-flex justify-content-between">
                                            <span className="btn btn-danger badge badge-danger" onClick={() => removeAnswer(1)} >
                                                <i className="fa fa-trash-o" aria-hidden="true " />
                                            </span>
                                            <span className="btn btn-white badge badge-white rounded-circle d-flex justify-content-center" style={{ width: '20px', height: '20px' }} onClick={() => handleCorrect(1)}>
                                                <i className={`d-${answer[1].correct ? 'block' : 'none'} fa fa-check text-primary`} aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="h-100 p-1">
                                            <textarea className="text-left form-control border-0 w-100 h-100 bg-dark text-white font-weight-bold" value={answer[1].content} onChange={(e) => handleChange(1, e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    {answer[2]
                                        ?
                                        <div className={`bg-${answer[2].correct ? 'success' : 'info'} w-100 h-100 rounded d-flex flex-column`}>
                                            <div className="p-2 d-flex justify-content-between">
                                                <span className="btn btn-danger badge badge-danger" onClick={() => removeAnswer(2)}>
                                                    <i className="fa fa-trash-o" aria-hidden="true" />
                                                </span>
                                                <span className="btn btn-white badge badge-white rounded-circle d-flex justify-content-center" style={{ width: '20px', height: '20px' }} onClick={() => handleCorrect(2)}>
                                                    <i className={`d-${answer[2].correct ? 'block' : 'none'} fa fa-check text-primary`} aria-hidden="true" />
                                                </span>
                                            </div>
                                            <div className="h-100 p-1">
                                                <textarea className="text-left form-control border-0 w-100 h-100 bg-dark text-white font-weight-bold" value={answer[2].content} onChange={(e) => handleChange(2, e.target.value)}></textarea>
                                            </div>
                                        </div>
                                        :
                                        <div className={`w-100 h-100 rounded btn btn-dark d-flex justify-content-center align-items-center`} onClick={addAnswer}>
                                            <i className="fa fa-plus text-secondary" aria-hidden="true" style={{ fontSize: '1.5rem' }} />
                                        </div>
                                    }
                                </div>
                                <div className="col">
                                    {answer.length == 2
                                        ? null
                                        : answer[3]
                                            ?
                                            <div className={`bg-${answer[3].correct ? 'success' : 'info'} w-100 h-100 rounded d-flex flex-column`}>
                                                <div className="p-2 d-flex justify-content-between">
                                                    <span className="btn btn-danger badge badge-danger" onClick={() => removeAnswer(3)}>
                                                        <i className="fa fa-trash-o" aria-hidden="true" />
                                                    </span>
                                                    <span className="btn btn-white badge badge-white rounded-circle d-flex justify-content-center" style={{ width: '20px', height: '20px' }} onClick={() => handleCorrect(3)}>
                                                        <i className={`d-${answer[3].correct ? 'block' : 'none'} fa fa-check text-primary`} aria-hidden="true" />
                                                    </span>
                                                </div>
                                                <div className="h-100 p-1">
                                                    <textarea className="text-left form-control border-0 w-100 h-100 bg-dark text-white font-weight-bold" value={answer[3].content} onChange={(e) => handleChange(3, e.target.value)}></textarea>
                                                </div>
                                            </div>
                                            :
                                            <div className={`w-100 h-100 rounded btn btn-dark d-flex justify-content-center align-items-center`} onClick={addAnswer}>
                                                <i className="fa fa-plus text-secondary" aria-hidden="true" style={{ fontSize: '1.5rem' }} />
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="mt-3 ml-auto">
                    <Button variant="secondary mx-1" onClick={onHide}><Trans i18nKey={'quiz.cancel'} /> </Button>
                    <Button variant="primary mx-1" onClick={handleSubmit}><Trans i18nKey={'quiz.submit'} /></Button>
                </div>
            </div>
        </Modal>
    )
}

export default RModal