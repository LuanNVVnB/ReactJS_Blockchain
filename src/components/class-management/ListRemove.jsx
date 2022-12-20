import React, { Component } from 'react';
import { Dialog, Button } from "element-react";
import moment from "moment";
import { Trans } from 'react-i18next';
class ListRemove extends Component {
    render() {
        const { fnShowClassRemove, showClassRemove, classDataRemove, fnRecoverClassRemove } = this.props;
        return (
            <div>
                <Dialog title={<Trans i18nKey={'class.trash'} />} size="small" visible={showClassRemove}
                    onCancel={() => fnShowClassRemove(false)}>
                    <Dialog.Body>
                        <div className="card shadow">
                            <div className="card-body">
                                <table className="table table-hover table-borderless border-v">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th><Trans i18nKey={'class.class-name'} /></th>
                                            <th><Trans i18nKey={'class.description'} /></th>
                                            <th><Trans i18nKey={'class.delete-by'} /></th>
                                            <th><Trans i18nKey={'class.delete-at'} /></th>
                                            <th><Trans i18nKey={'class.operation'} /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {classDataRemove.map(function (item, idx) {
                                            return (
                                                <tr key={idx + 1} className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#c-3954" href="#collap-3954">
                                                    <td>{idx + 1}</td>
                                                    <td>{item.className}</td>
                                                    <td>{item.description}</td>
                                                    <td>{item.deleted_by}</td>
                                                    <td>{moment(item.deleted_at).format("DD/MM/YYYY")}</td>
                                                    <td>
                                                        <div className="btn-group btn-sm">
                                                            <button className="btn btn-primary" onClick={(e) => fnRecoverClassRemove(item.id)} ><i className="fa fa-repeat"></i></button>
                                                        </div>
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
                        <Button onClick={() => fnShowClassRemove(false)}><Trans i18nKey={'Button.button-cancel'} /></Button>
                    </Dialog.Footer>
                </Dialog>
            </div >
        )
    }
}

export default ListRemove;