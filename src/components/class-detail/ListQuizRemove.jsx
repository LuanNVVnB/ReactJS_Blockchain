import React, { Component } from "react";
import { Dialog, Button } from "element-react";
import moment from "moment";
import { Trans } from 'react-i18next';
class ListQuizRemove extends Component {
    render() {
        const { classId, showTrashQuiz, trashQuizData, fnShowTrashQuiz, fnRecoveryQuiz } = this.props;
        return (
            <div> <Dialog title={<Trans i18nKey={'class.trash'} />} size="small" visible={showTrashQuiz}
                onCancel={() => fnShowTrashQuiz(false)}>
                <Dialog.Body>
                    <div className="card shadow">
                        <div className="card-body"> {/* table */}
                            <table className="table table-hover table-borderless border-v">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th><Trans i18nKey={'export.name'} /></th>
                                        <th><Trans i18nKey={'class.delete-at'} /></th>
                                        <th><Trans i18nKey={'class.delete-by'} /></th>
                                        <th><Trans i18nKey={'class.status'} /></th>
                                        <th><Trans i18nKey={'class.operation'} /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trashQuizData.map(function (item, idx) {
                                        return (
                                            <tr key={idx + 1} className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#c-3954" href="#collap-3954">
                                                <td>{idx + 1}</td>
                                                <td>{item.Quiz.name}</td>
                                                <td>{moment(item.deleted_at).format('MM-DD-YYYY')}</td>
                                                <td>{item.deleted_by}</td>
                                                <td>{item.active ? <span className="badge badge-pill badge-success p-2">ON</span> : 'OFF'}</td>
                                                <td> <button className="btn btn-primary" onClick={(e) => fnRecoveryQuiz(classId, item.id)}><i className="fa fa-repeat"></i> </button> </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Dialog.Body>
                <Dialog.Footer className="dialog-footer">
                    <Button onClick={() => fnShowTrashQuiz(false)}><Trans i18nKey={'Button.button-cancel'} /></Button>
                </Dialog.Footer>
            </Dialog>
            </div >
        )
    }
}

export default ListQuizRemove;