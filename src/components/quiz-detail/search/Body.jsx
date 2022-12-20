import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Question from './Question'
import QuizCard from './QuizCard'

const Body = ({ quizId, quizQues, show }) => {
    const { quizPublic } = useSelector(state => state.QuizManagement)
    const [question, setQuestion] = useState([])

    useEffect(() => {
        setQuestion([])
    }, [show])

    return (
        <div className="row" style={{ height: '90%' }}>
            <div className="search-quiz-public-wrap h-100 col-5 pb-5">
                {quizPublic.filter(i => i.id != quizId).map((i, index) => <QuizCard key={index} quiz={i} question={question} setQuestion={setQuestion} quizQues={quizQues} />)}
            </div>
            <div className="search-question-public-wrap h-100 col-7 bg-light pb-5">
                {question.map((i, index) => <Question key={index} quizId={quizId} index={index} quizQues={quizQues} question={i} />)}
            </div>
        </div>
    )
}

export default Body