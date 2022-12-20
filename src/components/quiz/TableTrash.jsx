import React from 'react'
import { useDispatch } from 'react-redux';
import moment from 'moment'
import { Trans } from 'react-i18next';

import * as QuizActions from '../../actions/quiz-management'

const TableTrash = ({ data }) => {
    const dispatch = useDispatch()

    function restore(id) {
        dispatch(QuizActions.fnRestoreDeletedQuiz(id))
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>No</th>
                    <th><Trans i18nKey={'class.class-name'} /></th>
                    <th><Trans i18nKey={'class.delete-by'} /></th>
                    <th><Trans i18nKey={'class.delete-at'} /></th>
                    <th><Trans i18nKey={'class.operation'} /></th>
                </tr>
            </thead>
            <tbody>
                {data.map(function (item, idx) {
                    return (
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.deletedBy}</td>
                            <td>{moment(item.deletedAt).format("DD/MM/YYYY")}</td>
                            <td>
                                <div className="btn-group btn-sm">
                                    <button className="btn btn-primary" onClick={() => restore(item.id)} ><i className="fa fa-repeat"></i></button>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableTrash