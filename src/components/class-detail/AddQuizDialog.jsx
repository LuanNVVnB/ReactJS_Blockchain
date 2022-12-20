import React, { Component } from 'react';
import { Dialog, Form, Input, Button } from "element-react";
import moment from 'moment';
import { Trans } from 'react-i18next';

class AddQuizClassDialog extends Component {
    render() {
        const { t } = this.props
        const { classId, fnShowDialog, showDialog, searchQuiz, fnSetSearch, fnSearchQuiz, quizDataSearch, fnAddQuiz } = this.props;
        return (
            <div>
                <Dialog title={<Trans i18nKey={'classDetail.addQuiz'} />} size="small" visible={showDialog}
                    onCancel={() => fnShowDialog(false)}>
                    <Dialog.Body>
                        <div>
                            <div className="input-group mb-3 ">
                                <input type="text" className="form-control" value={searchQuiz} onChange={(e) => fnSetSearch(e.target.value)} placeholder={t('quiz.search')} />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button" onClick={(e) => fnSearchQuiz(classId, searchQuiz)}>Search</button>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className='h6'>Total: {quizDataSearch.length} </div>
                        <div className="card shadow">
                            <div className="card-body"> {/* table */}
                                <table className="table table-hover table-borderless border-v">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th><Trans i18nKey={'MenuList.thead-name'} /></th>
                                            <th><Trans i18nKey={'class.delete-at'} /></th>
                                            <th><Trans i18nKey={'class.delete-by'} /></th>
                                            <th><Trans i18nKey={'class.operation'} /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {quizDataSearch.map(function (item, idx) {
                                            console.log(quizDataSearch)
                                            return (
                                                <tr key={idx + 1} className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#c-3954" href="#collap-3954">
                                                    <td>{idx + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{moment(item.created_at).format('DD-MM-YYYY')}</td>
                                                    <td>{item.createdBy}</td>
                                                    <td> <button className='btn btn-primary' onClick={(e) => fnAddQuiz(classId, item.id)}><i className="fa fa-plus"></i> </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={() => fnShowDialog(false)}>Cancel</Button>
                    </Dialog.Footer>
                </Dialog>
            </div>
        )
    }

}
export default AddQuizClassDialog;