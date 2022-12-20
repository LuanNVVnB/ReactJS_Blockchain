import React from 'react'
import * as http from '../../utils/httpProvider'
import * as CONFIG from '../../config/configUrl'

const Body = ({ current, setCurrent, setCorrect, setShow, quiz, setQuiz, result }) => {
    async function getAnswerCorrect(id) {
        const { data } = await http.getData(CONFIG.API_BASE_URL + `/rest/quiz/answer/correct/${id}`)
        return data
    }

    async function storePlayHistory(resultId, questionId, answerId) {
        const data = {
            result_id: resultId,
            question_id: questionId,
            answer_id: answerId
        }
        http.postData(CONFIG.API_BASE_URL + `/rest/quiz/play`, data)
    }

    async function handleClick(item) {
        storePlayHistory(result.id, quiz[current].question_id, item.id)
        const answerCorrect = await getAnswerCorrect(quiz[current].question_id)
        const correct = item.id === answerCorrect
        setCorrect(correct)
        setShow(true)
        let newAnswers = [...quiz[current]?.answers]
        newAnswers = newAnswers.map(i =>
            i.id === item.id
                ? { ...i, color: correct ? 'success' : 'danger', choose: true, correct }
                : { ...i, visible: 'invisible', correct: i.id == answerCorrect ? true : false }
        )
        setQuiz(quiz.map((i, index) => index === current ? { ...i, answers: newAnswers } : i))
        setTimeout(() => {
            setCurrent(current + 1)
            setShow(false)
        }, 1000)
    }

    return (
        <div className='d-flex flex-column bg-primary mx-3 rounded' style={{ fontSize: '1.5rem', height: '80%' }}>
            <div className="d-flex justify-content-center align-items-center h-50" style={{overflow: 'hidden'}}>
                <pre className="text-center bg-primary border-0 text-white">
                    {quiz[current]?.question}
                </pre>
            </div>
            <div className="container-fluid" style={{flex: 1}}>
                <div className="row h-100 p-1">
                    {quiz[current]?.answers.map((item, index) =>
                        <div
                            key={index}
                            className={`col d-flex justify-content-center align-items-center btn btn-${item.color} m-1 rounded ${item.visible}`}
                            style={{ whiteSpace: 'normal' }}
                            onClick={() => handleClick(item)}
                        >
                            <p className="text-center text-white" style={{ fontSize: '1.5rem' }}>
                                {item.content}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Body