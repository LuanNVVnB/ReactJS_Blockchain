import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import RModal from './Modal'
import Search from './search'
import { Trans, useTranslation } from 'react-i18next';
import * as QuizActions from '../../actions/quiz-management'

const Header = ({ id, quizQues }) => {
    const { quizDetail } = useSelector(state => state.QuizManagement)
    const [show, setShow] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [filter, setFilter] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        setShow(false)
    }, [quizDetail])

    function handleSearch() {
        setShowSearch(true)
        dispatch(QuizActions.fnFetchPublicQuiz(filter))
    }

    function onKeyPress({ keyCode }) {
        if (keyCode === 13) handleSearch()
    }

    function handleChange({ target }) {
        setFilter(target.value)
        if(target.value == '') dispatch(QuizActions.fnFetchPublicQuiz(''))
    }

    const { t } = useTranslation()

    return (
        <div className="container">
            {showSearch && <Search quizId={id} show={showSearch} quizQues={quizQues} onHide={() => setShowSearch(false)} filter={filter} setFilter={setFilter} />}
            <div className="header row">
                <div className="col-8 d-flex align-items-center justify-content-between border rounded p-1 pl-2">
                    <i className="fa fa-search text-primary" aria-hidden="true" />
                    <input className="border-0 form-control" type="text" value={filter} placeholder={t('quiz.find-question')} onKeyDown={onKeyPress} onChange={(e) => handleChange(e)} />
                    <div className="btn btn-primary" onClick={handleSearch}><Trans i18nKey={'quiz.search'} /></div>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center mt-0">
                    <div className="btn btn-primary w-100" onClick={() => setShow(true)}><Trans i18nKey={'quiz.new'} /></div>
                </div>
            </div>
            <RModal show={show} onHide={() => setShow(false)} quizId={id} />
        </div>
    )
}

export default Header