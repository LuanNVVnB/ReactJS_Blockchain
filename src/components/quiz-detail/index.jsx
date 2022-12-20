import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import * as QuizActions from '../../actions/quiz-management'
import { Container } from 'react-bootstrap';

import Header from './Header';
import Question from './Question';
import Card from './Card';
import ModalPlay from './ModalPlay';
import NoPermission from '../no-permission';
import './index.css';
import { Trans, withTranslation } from 'react-i18next';

const QuizDetail = ({ id }) => {
    const { quizDetail } = useSelector(state => state.QuizManagement)
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()

    // Effect
    useEffect(() => {
        dispatch(QuizActions.fnFetchQuizById(id))
    }, [id])

    if (!quizDetail) return <NoPermission />

    return (
        <Container className='quiz-detail mt-3 bg-white p-5' fluid>
            <div className="row p-5">
                <div className="col-8">
                    <Header id={id} quizQues={quizDetail?.Questions} />
                    <div className="mt-3">
                        <div className="row">
                            {quizDetail?.Questions.map((i, index) => <Question id={id} index={index} key={index} question={i} />)}
                        </div>
                    </div>
                </div>
                <div className="col-4 mt-0">
                    <Card quizDetail={quizDetail} />
                    <div className="btn btn-primary w-100 mt-3" onClick={() => setShow(true)}><Trans i18nKey={'quiz.play'} /></div>
                </div>
            </div>
            {show && <ModalPlay show={show} onHide={() => setShow(false)} id={id} />}
        </Container>
    )
}

export default withTranslation()(QuizDetail) 