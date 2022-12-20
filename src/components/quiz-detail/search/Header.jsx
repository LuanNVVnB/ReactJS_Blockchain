import React from 'react'
import { useDispatch } from 'react-redux'

import * as QuizActions from '../../../actions/quiz-management'

const Header = ({ onHide, filter, setFilter }) => {
    const dispatch = useDispatch()

    function handleSearch() {
        dispatch(QuizActions.fnFetchPublicQuiz(filter))
    }

    function onKeyPress({ keyCode }) {
        if (keyCode === 13) handleSearch()
    }

    function handleChange({ target }) {
        setFilter(target.value)
        if(target.value == '') dispatch(QuizActions.fnFetchPublicQuiz(''))
    }

    return (
        <div className="d-flex py-1">
            <div className="btn btn-white btn-close btn-primary" onClick={onHide}>
                <i className="fa fa-times" aria-hidden="true" />
            </div>
            <div className="col-5 d-flex align-items-center justify-content-between border rounded p-1 pl-2">
                <i className="fa fa-search text-primary" aria-hidden="true" />
                <input className="border-0 form-control input-quzizz" autoFocus={true} type="text" value={filter} onKeyDown={onKeyPress} onChange={(e) => handleChange(e)} />
                <div className="btn btn-primary" onClick={handleSearch}>Search</div>
            </div>
        </div>
    )
}

export default Header