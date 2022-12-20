import React, { Component } from 'react';
import moment from 'moment';
import { Trans } from 'react-i18next';
class EntityDetail extends Component {
    render() {
        const { dataExportByName, fnChangeLevelExcel, fnShowModal } = this.props;
        return (
            <div>
                <div className='h6'><Trans i18nKey={'export.total'} />: {dataExportByName.length} </div>
                <div className="card shadow">
                    <div className="card-body"> {/* table */}
                        <table className="table table-hover table-borderless border-v">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th><Trans i18nKey={'export.name'} /></th>
                                    <th><Trans i18nKey={'export.header'} /></th>
                                    <th>Entity</th>
                                    <th><Trans i18nKey={'export.width'} /></th>
                                    <th>Level</th>
                                    <th><Trans i18nKey={'export.status'} /></th>
                                    <th><Trans i18nKey={'export.createat'} /></th>
                                    <th><Trans i18nKey={'export.createby'} /></th>
                                    <th><Trans i18nKey={'export.operation'} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataExportByName.map(function (item, idx) {
                                    return (
                                        <tr key={idx + 1} className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#c-3954" href="#collap-3954">
                                            <td>{idx + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.header}</td>
                                            <td>{item.entity}</td>
                                            <td>{item.width}</td>
                                            <td>{item.level}</td>
                                            <td><span className={item.active ? "badge badge-pill badge-success p-2" : "badge badge-pill badge-success p-2"}>{item.active ? 'ON' : 'OFF'}</span> </td>
                                            <td>{moment(item.created_at).format('MM-DD-YYYY')}</td>
                                            <td>{item.created_by}</td>
                                            <td>
                                                <div className="btn-group btn-sm">
                                                    <button className='btn btn-primary' onClick={(e) => fnShowModal(true, item.id)}><i className="fa fa-pencil"></i></button>
                                                </div>
                                                <div className="btn-group btn-sm">
                                                    <button className='btn btn-warning' onClick={(e) => fnChangeLevelExcel(item.name, item.level)}><i className={dataExportByName.length === idx + 1 ? "fa fa-level-up" : "fa fa-level-down"}></i> </button>
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
export default EntityDetail;