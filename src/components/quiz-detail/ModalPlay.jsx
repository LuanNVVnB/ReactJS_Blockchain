import React, { useEffect, useState } from 'react'
import { Modal, Container, Button } from 'react-bootstrap'
import * as http from '../../utils/httpProvider'
import * as CONFIG from '../../config/configUrl'

import Answer from '../play/answer'
import History from './History'
import Card from './Card'

const ModalPlay = ({ show, onHide, id }) => {
  const [quiz, setQuiz] = useState()
  const [results, setResults] = useState([])
  const [histories, setHistories] = useState([])
  const [currentResult, setCurrentResult] = useState()

  useEffect(() => {
    fetchQuizDetail()
    return () => {
      setQuiz({})
      setResults([])
      setHistories([])
      setCurrentResult(null)
    }
  }, [])

  function fetchQuizDetail() {
    http.getData(CONFIG.API_BASE_URL + `/rest/quiz/public/${id}`)
      .then(({ data }) => {
        setQuiz(data)
        setResults(data.Results ? data.Results : [])
      })
  }

  function renderHistories(result) {
    setCurrentResult(result)
    setHistories([])
    setTimeout(() => {
      setHistories(result.PlayHistories.map((i) => {
        const questions = quiz.Questions.find(j => j.id === i.question_id)
        if (!questions) return null
        return {
          question: questions.content,
          answers: questions.Answers.map((ans) => {
            return {
              id: ans.id,
              content: ans.content,
              choose: i.answer_id === ans.id,
              correct: i.answer_correct_id === ans.id
            }
          })
        }
      }))
    }, 500)
  }

  if(!quiz) return <></>

  return (
    <Modal show={show} onHide={onHide} centered dialogClassName={`${results[0] ? 'modal-50w' : null}`}>
      <Container fluid>
        <div className="row h-100">
          <div className={`col-6 mt-0 p-3 bg-dark ${results[0] ? null : 'd-none'}`}>
            <h5 className='text-white'>Recent Activities</h5>
            <div className='pr-3' style={{ maxHeight: '20vh', overflow: 'auto' }}>
              {results.map((i, index) => <History key={index} result={i} onClick={() => renderHistories(i)} currentResult={currentResult} />)}
            </div>
            <h5 className='text-white mt-3'>Reviews</h5>
            <div className='pr-3' style={{ maxHeight: '50vh', overflow: 'auto' }}>
              {histories.map((i, index) => <Answer key={index} quiz={i} index={index} />)}
            </div>
          </div>
          <div className={`col-${results[0] ? '6' : '12'} mt-0 p-3`}>
            <Card quizDetail={quiz} />
            <div className="d-flex w-100">
              <div className="btn btn-secondary w-100 mt-3 mx-1" onClick={onHide}>CANCEL</div>
              <Button href={`#/play?id=${id}`} className="w-100 mt-3 mx-1" disabled={quiz?.Questions?.length > 0 || quiz?.questions > 0 ? false : true}>{results[0] ? !results[0]?.finish ? 'CONTINUE' : 'START' : 'START'}</Button>
            </div>
          </div>
        </div>
      </Container>
    </Modal>
  )
}

export default ModalPlay