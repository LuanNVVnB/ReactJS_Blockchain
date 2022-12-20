import React from 'react'

import Header from './Header'
import Body from './Body'

const Search = ({ quizId, show, onHide, filter, setFilter, quizQues }) => {
    return (
        <div className={`search-question p-0 ${show && 'show'}`}>
            <div className="bg-white w-75 h-100 ml-auto position-relative">
                <div className="container-fluid h-100 d-flex flex-column">
                    <Header onHide={onHide} filter={filter} setFilter={setFilter} />
                    <div className="row mt-3">
                        <div className="col-5"><h3>Quiz</h3></div>
                        <div className="col-7"><h3>Choose Question</h3></div>
                    </div>
                    <Body show={show} quizId={quizId} quizQues={quizQues} />
                </div>
            </div>
        </div>
    )
}

export default Search