import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import RModal from './Modal';
import ModalTrash from './ModalTrash';
import * as QuizActions from '../../actions/quiz-management';
import { Trans, useTranslation } from 'react-i18next';

const Header = () => {
    const { current, maxResults } = useSelector(state => state.QuizManagement.paging)
    const { quiz } = useSelector(state => state.QuizManagement)
    const [show, setShow] = useState(false);
    const [showTrash, setShowTrash] = useState(false);
    const [filter, setFilter] = useState('');

    // Dispatch
    const dispatch = useDispatch()

    // Effect
    useEffect(() => {
        setShow(false)
    }, [quiz])

    // Function
    function onKeyPress({ keyCode }) {
        if (keyCode === 13) dispatch(QuizActions.fnFetchQuiz(filter, 1, maxResults))
    }

    function handleChange({ target }) {
        setFilter(target.value)
        if(target.value == '') {
            dispatch(QuizActions.fnFetchQuiz('', 1, maxResults))
            dispatch(QuizActions.fnSearch(''))
        }
    }
    
    const { t } = useTranslation();

    return (
        <div className="d-flex mt-1">
            <div className="btn-group btn-sm">
                <button className="btn btn-primary" onClick={() => setShowTrash(true)} ><i className="fa fa-trash-o"></i> <Trans i18nKey={'class.trash'} /></button>
            </div>
            <div className="btn-group btn-sm ml-auto">
                <button className="btn btn-primary" onClick={() => setShow(true)}><i className="fa fa-plus-circle"></i> <Trans i18nKey={'quiz.add'} /></button>
            </div>
            <div className="btn-group btn-sm border-0">
                <input type="hidden" className="form-control" id="txtId" />
                <input type="text" className="form-control" placeholder={t('quiz.search')} id="txtSearch" value={filter} onKeyDown={onKeyPress} onChange={(e) => handleChange(e)} />
            </div>
            <div className="btn-group btn-sm">
                <button type="button" className="btn btn-primary" onClick={() => dispatch(QuizActions.fnFetchQuiz(filter, 1, maxResults))}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <RModal show={show} onHide={() => setShow(false)} />
            {showTrash && <ModalTrash show={showTrash} onHide={() => setShowTrash(false)} />}
        </div>
    )
}

export default Header