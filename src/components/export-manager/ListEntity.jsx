import React, { Component } from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";
import { Trans } from 'react-i18next';
class ListEntity extends Component {
    render() {
        const { exportData, fnExportExcel } = this.props;
        return (
            <div>
                <div className="card shadow">
                    <div className="card-body"> {/* table */}
                        <table className="table table-hover table-borderless border-v">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th><Trans i18nKey={'export.name'} /></th>
                                    <th><Trans i18nKey={'export.status'} /></th>
                                    <th><Trans i18nKey={'export.createat'} /></th>
                                    <th><Trans i18nKey={'export.deleteby'} /></th>
                                    <th><Trans i18nKey={'export.operation'} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {exportData.map(function (item, idx) {
                                    return (
                                        <tr key={idx + 1} className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#c-3954" href="#collap-3954">
                                            <td>{idx + 1}</td>
                                            <td>{item.name}</td>
                                            <td><span className={item.active ? "badge badge-pill badge-success p-2" : "badge badge-pill badge-success p-2"}>{item.active ? 'ON' : 'OFF'}</span> </td>
                                            <td>{moment(item.created_at).format('MM-DD-YYYY')}</td>
                                            <td>{item.created_by}</td>
                                            <td>
                                                <div className="btn-group btn-sm">
                                                    <Link to={`/export-detail?code=${item.name}`}> <button className='btn btn-info'><i className="fa fa-eye"></i> </button></Link>
                                                </div>
                                                <div className="btn-group btn-sm">
                                                    <button className='btn btn-warning' onClick={(e) => fnExportExcel(item.name, item.name)}><i className="fa fa-file-excel-o"></i> </button>
                                                </div>
                                            </td>
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
export default ListEntity;