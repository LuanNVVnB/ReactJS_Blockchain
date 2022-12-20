import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as CandidateActions from '../../actions/candidate-manager/candidateActions';
import * as BallotActions from '../../actions/ballot-manager/ballotActions';
import Paging from './Paging';
import Table from './Table';
import { Trans, withTranslation } from 'react-i18next';
import "./index.css"
// import { useSelector } from 'react-redux';
import CreateBallot from './CreateBallot';
import { useLayoutEffect } from 'react';

const Ballots = () => {
    const dispatch = useDispatch()
    let openCreateBallot = useSelector(state => state.BallotManagerReducer.openCreateBallot);
    const formDataBallot = useSelector(state => state.BallotManagerReducer.formDataBallot);
    const ballot = useSelector(state => state.BallotManagerReducer.ballotData);
    useEffect(() => {
        dispatch(CandidateActions.fnGetAllCandidates());
        dispatch(BallotActions.fnGetAllBallot());
    }, [dispatch])

    console.log("create ballot ---", openCreateBallot)
    return (
        <div id="quiz-category">
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-12">
                    <h2><Trans i18nKey={'quiz-category.header'} /> </h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <span><Trans i18nKey={'content.menu-herder-link-user'} /></span>
                        </li>
                        <li className="breadcrumb-item">
                            <span><Trans i18nKey={'quiz-category.quiz-manager'} /></span>
                        </li>
                        <li className="breadcrumb-item">
                            <span><Trans i18nKey={'quiz-category.header'} /></span>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="wrapper wrapper-content animated">

                {openCreateBallot ? <div className="row">
                    <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <CreateBallot formDataBallot={formDataBallot} />
                            </div>
                        </div>
                    </div>
                </div> :
                <>
                {/* <div className="row mb-4">
                    <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-8 grid-margin stretch-card">
                                        <div className="row mb-4">
                                            <div className="col-md-6">
                                                <div className="card p-2">
                                                    <div className="text-info">ETHER PRICE</div>
                                                    <div className="">$1,904.45 @ 0.078976 BTC (-3.96%)</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card p-2">
                                                    <div className="text-info">MARKET CAP</div>
                                                    <div className="">$228,740,949,578.00</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card p-2">
                                                    <div className="text-info">TRANSACTIONS</div>
                                                    <div className="">1,677.97 M (12.5 TPS)</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card p-2">
                                                    <div className="text-info">FICULTY</div>
                                                    <div className="">1,677.97 M (12.5 TPS)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 grid-margin stretch-card">
                                        <div className="card">Eth:</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                        <Table ballot={ballot} />
                                    <Paging />
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                }

            </div>
        </div>
    )
}

export default withTranslation()(Ballots)