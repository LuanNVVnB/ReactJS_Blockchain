import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import './index.css'

const DetailQuiz = ({ id = 9 }) => {
    const { quizDetail } = useSelector(state => state.QuizManagement)
    return (
        <Container className='quiz-detail user bg-white p-5' fluid>
            <div className="row p-5">
                <div className="col-8">

                </div>
                <div className="col-4">
                    {/* <Card quizDetail={quizDetail} /> */}
                    <a href={`#/play?id=${id}`}>
                        <div className="btn btn-primary w-100 mt-3"><Trans i18nKey={'quiz.play'} /> </div>
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default DetailQuiz