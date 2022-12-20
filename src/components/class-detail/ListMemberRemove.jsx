import React, { Component } from "react";
import { Dialog, Button } from "element-react";
import moment from "moment";
import { Trans } from 'react-i18next';
class ListMemberRemove extends Component {
    render() {
        const { classId, showTrash, fnShowTrash, getDataTrash, fnRecoveryMember } = this.props;
        return (
            <div> <Dialog title={<Trans i18nKey={'class.trash'} />} size="small" visible={showTrash}
                onCancel={() => fnShowTrash(false)}>
                <Dialog.Body>
                    <div className="card shadow overflow-auto">
                        <div className="card-body"> {/* table */}
                            <table className="table table-hover table-borderless border-v">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th><Trans i18nKey={'UserList.thdead-username'} /></th>
                                        <th>Email</th>
                                        <th><Trans i18nKey={'class.delete-at'} /></th>
                                        <th><Trans i18nKey={'class.delete-by'} /></th>
                                        <th><Trans i18nKey={'class.operation'} /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getDataTrash.map(function (item, idx) {
                                        return (
                                            <tr key={idx + 1} className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#c-3954" href="#collap-3954">
                                                <td>{idx + 1}</td>
                                                <td>{item.User.username}</td>
                                                <td>{item.User.email}</td>
                                                <td>{moment(item.deleted_at).format('DD-MM-YYYY')}</td>
                                                <td>{item.deleted_by}</td>
                                                <td>
                                                    <div className="btn-group btn-sm">
                                                        <button className='btn btn-primary' onClick={(e) => fnRecoveryMember(classId, item.user_id)} ><i className="fa fa-repeat"></i></button>
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
                    <Button onClick={() => fnShowTrash(false)}><Trans i18nKey={'Button.button-cancel'} />   </Button>
                </Dialog.Footer>
            </Dialog>
            </div >
        )
    }
}

export default ListMemberRemove;