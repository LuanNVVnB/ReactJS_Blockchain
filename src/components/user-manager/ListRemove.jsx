import React, { Component } from 'react';
import { Dialog, Form, Input, Button } from "element-react";
import moment from "moment";

class ListRemove extends Component {
    render() {
        const { showDialogTrash, fnShowDialogTrash, fnRemoveUserTrash, userDataTrash } = this.props;
        return (
            <Dialog title="TRASH" size="small" visible={showDialogTrash}
                onCancel={() => fnShowDialogTrash(false)}>
                <Dialog.Body>
                    <div className="row">
                        <div className="col-md-12 my-4">
                            <div className="card shadow ">
                                <div className="card-body "> {/* table */}
                                    <table className="table table-hover table-borderless border-v">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>UserName</th>
                                                <th>Email</th>
                                                <th>Deleted By</th>
                                                <th>Deleted At</th>
                                                <th>Operations</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userDataTrash.length > 0 ? userDataTrash.map(function (item, idx) {
                                                return (
                                                    <tr key={idx + 1} className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#c-3954" href="#collap-3954">
                                                        <td>{idx + 1}</td>
                                                        <td>{item.username}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.deleted_by}</td>
                                                        <td>{moment(item.deleted_at).format('DD/MM/YYYY')}</td>
                                                        <td>
                                                            <div className="btn-group btn-sm">
                                                                <button className='btn btn-primary' onClick={(e) => fnRemoveUserTrash(item.id)}><i className="fa fa-repeat"></i> </button>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                )
                                            }) : 'TRASH IS EMPTY'}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Body>
                <Dialog.Footer className="dialog-footer">
                    <Button onClick={() => fnShowDialogTrash(false)}>Cancel</Button>
                </Dialog.Footer>
            </Dialog>

        )
    }


}

export default ListRemove;