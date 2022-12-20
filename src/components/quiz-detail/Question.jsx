import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { EDIT_QUESTION } from './constants'
import RModal from './Modal'
import * as QuizActions from '../../actions/quiz-management'
import { useEffect } from 'react'

const prefixAnswer = ['A', 'B', 'C', 'D']

const Question = ({ id, index, question }) => {
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()

    function handleRemoveQuestion() {
        dispatch(QuizActions.fnRemoveQuestionFromQuiz(id, question.id))
    }

    useEffect(() => {
        setShow(false)
    }, [question])

    return (
        <div className="col-12 my-2">
            <div className="border border-primary">
                <div className="text-white bg-primary d-flex align-items-center p-2">
                    <span>{index + 1}</span>
                    <div className="d-flex ml-auto">
                        <span className="btn btn-info badge badge-info mx-1 p-2" onClick={() => setShow(true)}>
                            <i className="fa fa-pencil " aria-hidden="true" />
                        </span>
                        <span className="btn btn-danger badge badge-danger mx-1 p-2" onClick={handleRemoveQuestion}>
                            <i className="fa fa-trash-o " aria-hidden="true" />
                        </span>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="container">
                        <span className="font-weight-bold">
                            <span className="text-primary" style={{ fontSize: '1.2rem' }}>Q. </span>
                            {question.content}
                        </span>
                        <div className="row mt-3">
                            {question.Answers.map((i, index) =>
                                <div key={index} className="col-6 my-1">
                                    <span className={`text-${i.correct ? 'danger' : 'dark'} font-weight-bold`} style={{ fontSize: '1.2rem' }}>{prefixAnswer[index]}. </span>
                                    {i.content}
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
            {show && <RModal type={EDIT_QUESTION} show={show} onHide={() => setShow(false)} quizId={id} quesId={question.id} ques={question.content} ans={question.Answers} />}
        </div>
    )
}

export default Question