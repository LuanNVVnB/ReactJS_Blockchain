import React, { Component } from 'react';
import { Button } from 'element-react';

class PermissionTable extends Component {

    render() {
        const { fnDeletePermission, permissions } = this.props;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Permission Type Code</th>
                        <th>Permission Type Name</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                {permissions.map(function (row, index) {
                    return (
                            <tr key={index}>
                                <td><span>{index + 1}</span></td>
                                <td><span>{row.code}</span></td>
                                <td><span>{row.name}</span></td>
                                <td>
                                    <Button type="primary" icon="delete" onClick={() => fnDeletePermission(row.code)}></Button>
                                </td>
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        )
    }
}

export default PermissionTable;