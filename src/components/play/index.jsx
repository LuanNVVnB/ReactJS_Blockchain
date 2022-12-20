import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Redirect, useHistory } from 'react-router-dom'

import Header from './header'
import Body from './body'
import Footer from './footer'
import Result from './result'
import * as QuizActions from '../../actions/quiz-management'

import './index.css'

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const quizInit = [
    {
        question: '',
        answers: [
            {
                id: 1,
                content: '',
                visible: 'visible',
                color: 'info',
                choose: false
            }
        ]
    }
]

const color = ['info', 'dark', 'warning', 'secondary']

const Play = () => {
    const history = useHistory()
    const query = useQuery();
    const id = query.get("id")
    const { quizPlay } = useSelector(state => state.QuizManagement)

    const [quiz, setQuiz] = useState(quizInit)
    const [current, setCurrent] = useState(0)
    const [correct, setCorrect] = useState(false)
    const [show, setShow] = useState(false)
    const [end, setEnd] = useState(false)

    const dispatch = useDispatch()

    // Effect
    useEffect(() => {
        dispatch(QuizActions.fnFetchQuizToPlay(id))
    }, [id, dispatch])

    useEffect(() => {
        if (quizPlay?.quiz?.Questions && current === 0) {
            if(quizPlay.quiz.Questions.length == 0) history.goBack()
            setQuiz(quizPlay.quiz.Questions.map((i) => {
                return ({
                    question_id: i.id,
                    question: i.content,
                    answers: i.Answers.map((j, index) => {
                        return ({
                            id: j.id,
                            content: j.content,
                            visible: 'visible',
                            correct: quizPlay.result.PlayHistories.find(item => item.question_id === i.id)?.answer_correct_id === j.id,
                            color: color[index],
                            choose: quizPlay.result.PlayHistories.findIndex(item => item.question_id === i.id && item.answer_id === j.id) >= 0 ? true : false
                        })
                    })
                })
            }))
            setCurrent(quizPlay.result.PlayHistories.length)
        }
    }, [quizPlay, current])

    useEffect(() => {
        if (current >= quiz.length) setEnd(true)
        else setEnd(false)
    }, [current, quiz.length])

    if (!id) {
        return <Redirect to="/dashboard" />
    }

    if (end) {
        return (
            <div className="quiz-play w-100 h-100 bg-dark">
                <Result id={id} quiz={quiz} setCurrent={setCurrent} result={quizPlay?.result} />
            </div>
        )
    }

    return (
        <div className="quiz-play w-100 h-100 bg-dark">
            <Header id={id} current={current} total={quiz.length} setEnd={setEnd} result={quizPlay?.result} quiz={quizPlay?.quiz} />
            <Body current={current} setCurrent={setCurrent} setCorrect={setCorrect} setShow={setShow} quiz={quiz} setQuiz={setQuiz} result={quizPlay?.result} />
            <Footer correct={correct} show={show} />
        </div>
    )
}

export default Play