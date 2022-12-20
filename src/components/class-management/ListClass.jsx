import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
class ListClass extends Component {
    render() {
        const { classData, fnDeleteClass, fnShowModal } = this.props;
        const fnCountMemberClass = (objMember) => {
            let count = 0;
            for (let i = 0; i < objMember.length; i++) {
                if (objMember[i].deleted_at === null || objMember[i].deleted_at === 'null') {
                    count++;
                }
            }
            return count;
        };
        return (
            <div className="row">
                <div className="col-md-12 my-4">
                    <div className="card shadow">
                        <div className="card-body"> {/* table */}
                            <table className="table table-hover table-borderless border-v">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th><Trans i18nKey={'class.class-name'} /></th>
                                        <th><Trans i18nKey={'class.class-code'} /></th>
                                        <th><Trans i18nKey={'class.member'} /></th>
                                        <th><Trans i18nKey={'class.description'} /></th>
                                        <th><Trans i18nKey={'class.status'} /></th>
                                        <th><Trans i18nKey={'class.operation'} /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {classData.map(function (item, idx) {
                                        return (
                                            <tr key={idx + 1} className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#c-3954" href="#collap-3954">
                                                <td>{idx + 1}</td>
                                                <td>{item.className}</td>
                                                <td>{item.classCode}</td>
                                                <td>{`${fnCountMemberClass(item.ClassDetails)}/${item.numOfMember}`}</td>
                                                <td>{item.description}</td>
                                                <td><span className="badge badge-pill badge-success p-2">ON</span></td>
                                                <td>
                                                    <div className="btn-group btn-sm">
                                                        <Link to={`/class-detail?code=${item.id}`}> <button className='btn btn-info'><i className="fa fa-eye"></i> </button></Link>
                                                    </div>
                                                    <div className="btn-group btn-sm">
                                                        <button className='btn btn-primary' onClick={() => fnShowModal(true, 'update', item.id)}><i className="fa fa-pencil"></i></button>
                                                    </div>
                                                    <div className="btn-group btn-sm">
                                                        <button className='btn btn-danger' onClick={() => fnDeleteClass(item.id)}><i className="fa fa-trash-o"></i> </button>
                                                    </div>
                                                </td>

                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

}


export default ListClass;