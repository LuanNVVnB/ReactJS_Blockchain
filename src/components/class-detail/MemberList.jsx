import React, { Component } from 'react';
import moment from 'moment';
import { Trans } from 'react-i18next';
class ListMemberClassDetail extends Component {
    render() {
        const { memberData, classId, fnRemoveMember } = this.props;
        return (
            <div>
                <div className='h6'>Total: {memberData.length} </div>
                <div className="card shadow">
                    <div className="card-body"> {/* table */}
                        <table className="table table-hover table-borderless border-v">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th><Trans i18nKey={'UserList.thdead-username'} /></th>
                                    <th>Email</th>
                                    <th><Trans i18nKey={'class.delete-at'} /></th>
                                    <th><Trans i18nKey={'class.delete-by'} /></th>
                                    <th><Trans i18nKey={'class.status'} /></th>
                                    <th><Trans i18nKey={'class.operation'} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {memberData.map(function (item, idx) {
                                    return (
                                        <tr key={idx + 1} className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#c-3954" href="#collap-3954">
                                            <td>{idx + 1}</td>
                                            <td>{item.User.username}</td>
                                            <td>{item.User.email}</td>
                                            <td>{moment(item.created_at).format('MM-DD-YYYY')}</td>
                                            <td>{item.created_by}</td>
                                            <td>{item.active ? <span className="badge badge-pill badge-success p-2">ON</span> : 'OFF'}</td>
                                            <td> <button className='btn btn-primary' onClick={() => fnRemoveMember(classId, item.user_id)}><i className="fa fa-trash-o"></i> </button> </td>
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
export default ListMemberClassDetail;