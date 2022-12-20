import React, { Component } from "react";
import moment from "moment";

import { Trans } from 'react-i18next';
class QuizList extends Component {
    render() {
        const { quizData, fnRemoveQuiz, classId } = this.props;
        return (
            <div>
                <div className='h6'>Total: {quizData.length} </div>
                <div className="card shadow">
                    <div className="card-body"> {/* table */}
                        <table className="table table-hover table-borderless border-v">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th><Trans i18nKey={'export.name'} /></th>
                                    <th><Trans i18nKey={'export.createat'} /></th>
                                    <th><Trans i18nKey={'classDetail.createby'} /></th>
                                    <th><Trans i18nKey={'quiz-category.status'} /></th>
                                    <th><Trans i18nKey={'export.operation'} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {quizData.map(function (item, idx) {
                                    console.log(item)
                                    return (
                                        <tr key={idx + 1} className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#c-3954" href="#collap-3954">
                                            <td>{idx + 1}</td>
                                            <td>{item.Quiz.name}</td>
                                            <td>{moment(item.created_at).format('MM-DD-YYYY')}</td>
                                            <td>{item.created_by}</td>
                                            <td>{item.active ? <span className="badge badge-pill badge-success p-2">ON</span> : 'OFF'}</td>
                                            <td> <button className='btn btn-primary' onClick={(e) => fnRemoveQuiz(item.id, classId)} ><i className="fa fa-trash-o"></i> </button> </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        )
    }
}
export default QuizList;