import React from 'react'
import { Button, ProgressBar } from 'react-bootstrap'

import * as http from '../../utils/httpProvider'
import * as CONFIG from '../../config/configUrl'
import Answer from './answer'

const Result = ({ quiz, result }) => {

    function countCorrectPct() {
        let correct = 0
        quiz.forEach(i => {
            correct = checkCorrect(i) ? correct + 1 : correct
        })
        return Math.floor((correct / quiz.length) * 100)
    }

    function checkCorrect(quiz) {
        let correct = false
        quiz.answers.forEach(i => (i.correct && i.choose) ? correct = true : null)
        return correct
    }

    http.putData(CONFIG.API_BASE_URL + `/rest/result/${result.id}`, {
            score: countCorrectPct(),
            time: '0',
            finish: true
    })
    
    return (
        <div className='d-flex justify-content-center'>
            <div className="d-flex flex-column w-50 p-3 rounded bg-dark" style={{ background: 'black' }}>
                <h2 className="text-white text-center">Summary</h2>
                <div className="mt-3 rounded p-3 " style={{ background: 'black' }}>
                    <p className='text-white'>Accuracy ({countCorrectPct()}%)</p>
                    <ProgressBar variant='primary' now={countCorrectPct()} />
                </div>
                <Button className='w-100 mt-3' onClick={() => window.location.reload()}>PLAY AGAIN</Button>
                <Button href="#/client" className='w-100 mt-3' variant='light'>FIND A NEW QUIZ</Button>
                <div className="mt-3 rounded p-3 " style={{ background: 'black' }}>
                    <p className='text-white'>Review Questions</p>
                    {quiz.map((i, index) =>
                        <Answer quiz={i} index={index} key={index} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Result