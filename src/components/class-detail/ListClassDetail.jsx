import React, { Component } from 'react';
import moment from 'moment';
import { Trans } from 'react-i18next'
class ListMemberClassDetail extends Component {
    render() {

        const { memberData } = this.props;
        console.log(memberData)
        return (
            <div>
                <div className="card shadow">
                    <div className="card-body"> {/* table */}
                        <table className="table table-hover table-borderless border-v">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th><Trans i18nKey={'classDetail.username'} /></th>
                                    <th>Email</th>
                                    <th><Trans i18nKey={'classDetail.join'} /></th>
                                    <th><Trans i18nKey={'export.status'} /></th>
                                    <th><Trans i18nKey={'export.createat'} /></th>
                                    <th><Trans i18nKey={'classDetail.action'} /></th>
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
                                            <td>{item.active ? 'ON' : 'OFF'}</td>
                                            <td>{item.active ? 'ON' : 'OFF'}</td>
                                            <td>{item.active ? 'ON' : 'OFF'}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <p>ABC DETAILS</p>
            </div >
        )
    }
}
export default ListMemberClassDetail;