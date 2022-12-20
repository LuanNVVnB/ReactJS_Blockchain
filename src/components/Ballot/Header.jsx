import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import RModal from './Modal';
import * as QuizActions from '../../actions/quiz-management';
import { Trans, useTranslation } from 'react-i18next';

const Header = () => {
    const { maxResults } = useSelector(state => state.QuizManagement.paging)
    const { category } = useSelector(state => state.QuizManagement)
    const [show, setShow] = useState(false);
    const [showTrash, setShowTrash] = useState(false);
    const [search, setSearch] = useState('');

    // Dispatch
    const dispatch = useDispatch()

    // Effect
    useEffect(() => {
        setShow(false)
    }, [category])

    // Function
    function onKeyPress({ keyCode }) {
        if (keyCode === 13) handleSearch()
    }

    function handleSearch() {
        dispatch(QuizActions.fnFetchCategory(search, 1, maxResults))
        dispatch(QuizActions.fnSearch(search))
    }

    function handleChange({ target }) {
        setSearch(target.value)
        if(target.value == '') {
            dispatch(QuizActions.fnFetchCategory('', 1, maxResults))
            dispatch(QuizActions.fnSearch(''))
        }
    }

    const { t } = useTranslation();
    return (
        <div className="d-flex mt-1">
          
            <div className="btn-group btn-sm ">
                <button className="btn btn-primary" onClick={() => setShow(true)}><i className="fa fa-plus-circle"></i> <Trans i18nKey={'quiz.add'} /></button>
            </div>
            <div className="btn-group btn-sm border-0 ml-auto">
                <input type="hidden" className="form-control" id="txtId" />
                <input type="text" className="form-control" placeholder={t('quiz.search')} id="txtSearch" value={search} onKeyDown={onKeyPress} onChange={(e) => handleChange(e)} />
            </div>
            <div className="btn-group btn-sm">
                <button type="button" className="btn btn-primary" onClick={handleSearch}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <RModal show={show} onHide={() => setShow(false)} />
         
        </div>
    )
}

export default Header