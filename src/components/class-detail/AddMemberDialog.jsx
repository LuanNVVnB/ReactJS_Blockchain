import React, { Component } from 'react';
import { Dialog, Form, Input, Button } from "element-react";
import { Trans } from 'react-i18next';

class AddMemberClassDialog extends Component {

    render() {
        const { t } = this.props
        const { fnShowDialog, showDialog, searchMemberData, memberData, fnSearchMember, fnChangeValueSearch, classId, fnAddMembers } = this.props;
        return (
            <div>
                <Dialog title={<Trans i18nKey={'classDetail.add'} />} size="small" visible={showDialog}
                    onCancel={() => fnShowDialog(false)}>
                    <Dialog.Body>
                        <div>
                            <div className="input-group mb-3 ">
                                <input type="text" className="form-control" placeholder={t('classDetail.searchEmal')} value={searchMemberData} onChange={(e) => fnChangeValueSearch(e.target.value)} />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button" onClick={() => fnSearchMember(searchMemberData, classId)} >Search</button>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className='h6'>Total: {memberData.length} </div>
                        <div className="card shadow">
                            <div className="card-body"> {/* table */}
                                <table className="table table-hover table-borderless border-v">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th><Trans i18nKey={'UserList.thdead-username'} /></th>
                                            <th>Email</th>
                                            <th><Trans i18nKey={'UserList.thdead-phone'} /></th>
                                            <th><Trans i18nKey={'Profile.status'} /></th>
                                            <th><Trans i18nKey={'class.operation'} /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {memberData.map(function (item, idx) {
                                            return (
                                                <tr key={idx + 1} className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#c-3954" href="#collap-3954">
                                                    <td>{idx + 1}</td>
                                                    <td>{item.username}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone || '#'}</td>
                                                    <td>{item.active ? 'ON' : 'OFF'}</td>
                                                    <td> <button className='btn btn-primary' onClick={(e) => fnAddMembers(item.id, classId)}><i className="fa fa-plus"></i> </button>
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
                        <Button onClick={() => fnShowDialog(false)}><Trans i18nKey={'Button.button-cancel'} /></Button>
                    </Dialog.Footer>
                </Dialog>
            </div>
        )
    }

}
export default AddMemberClassDialog;