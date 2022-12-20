import React from 'react';
import { useLocation } from 'react-router-dom'

import Header from './Header';
import Paging from './Paging';
import Table from './Table';
import QuizDetail from '../quiz-detail';

import { Trans, withTranslation } from 'react-i18next';

import './index.css'

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Quiz = () => {
    const query = useQuery();
    const id = query.get("id")

    if (id) {
        return <QuizDetail id={id} />
    }

    return (
        <div id="quiz">
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-12">
                    <h2><Trans i18nKey={'quiz.quiz-title'} /></h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <span><Trans i18nKey={'content.menu-herder-link-user'} /></span>
                        </li>
                        <li className="breadcrumb-item">
                            <span><Trans i18nKey={'quiz.quiz-manager'} /></span>
                        </li>
                        <li className="breadcrumb-item">
                            <span><Trans i18nKey={'quiz.quiz-title'} /></span>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="wrapper wrapper-content animated">
                <div className="row">
                    <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className='card-title'>Quiz</h4>
                                <hr />
                                <Header />
                                <hr />
                                <Table />
                                <Paging />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Quiz)