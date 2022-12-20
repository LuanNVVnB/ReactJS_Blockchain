import React from 'react'
import { useDispatch } from 'react-redux'

import * as QuizActions from '../../../actions/quiz-management'

const prefixAnswer = ['A', 'B', 'C', 'D']

const Question = ({ index, quizId, question, quizQues }) => {

    const dispatch = useDispatch()

    function handleAddQuestion() {
        const data = {
            quiz_id: quizId,
            question_id: question.id
        }
        checkQuestionExist()
            ? dispatch(QuizActions.fnRemoveQuestionFromQuiz(quizId, question.id))
            : dispatch(QuizActions.fnAddQuestionToQuiz(data))
    }

    function checkQuestionExist() {
        return quizQues.map(i => i.id).includes(question.id)
    }

    return (
        <div className="col-12 my-2">
            <div className={`border border-${checkQuestionExist() ? 'success' : 'primary'} bg-white`}>
                <div className={`text-white bg-${checkQuestionExist() ? 'success' : 'primary'} d-flex align-items-center p-2`}>
                    <span>{index + 1}</span>
                    <div className="d-flex ml-auto">
                        <span className="btn btn-white badge badge-white d-flex justify-content-center" style={{ width: '20px', height: '20px' }} onClick={handleAddQuestion}>
                            <i className={`d-${checkQuestionExist() ? 'block' : 'none'} fa fa-check text-primary`} aria-hidden="true" />
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
        </div>
    )
}

export default Question